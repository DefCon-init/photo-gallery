/* eslint react-hooks/exhaustive-deps: 0 */ 
import React, { useState, useEffect } from 'react';

import { useAuth0 } from '../../utils/AuthContext';

import { PostForm } from './styles';
import graphQlAPI, { api } from '../../utils/api';
import { Redirect } from 'react-router';

interface NewPost {
  userId: string;
  image: string;
  date: string;
}

const New: React.FC = (): JSX.Element => {
  const { user } = useAuth0();
  const [loading, setLoading] = useState(false)
  const [redirect, setRedirect] = useState(false)
  const [post, setPost] = useState<NewPost>({ image: '', date: `${new Date().toISOString()}`, userId: '' });

  
  const loadRequest = async (email) => {
    let requestBody = {
      query: `
        query userByEmail($email: String!) {
          userByEmail(email: $email) {
            id
            email
          }
        }
      `,
      variables: {
        email: email
      }
    };
    const response = await graphQlAPI.post('', requestBody);
    const { data: { data: { userByEmail: { id } } } } = response;
    console.log('id', id)
    setPost({ ...post, userId: id });
  };

  useEffect(() => {
    const { email } = user
    loadRequest(email);
  }, [user]);

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(post)
    const requestBody = {
      query: `
          mutation createPost($image: String!, $date: String!, $userId: String!) {
            createPost(postInput: {image: $image, date: $date, userId: $userId}) {
              id
              image
              date
            }
          }
        `,
      variables: {
        ...post
      }
    };
    await graphQlAPI.post('', requestBody);
    setRedirect(true)
  };

  const handleImageChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
    setLoading(true)
    const request = new FormData();
    request.append('image', e.target.files![0]);
    const { data: { data } } = await api.post('upload', request);
    setPost({ ...post, image: data[0]['image'] })
    setLoading(false)
  };

  if(redirect) {
    return <Redirect to="/feed" ></Redirect>
  }

  return (
    <PostForm onSubmit={handleSubmit}>
      {console.log(post)}
      <input type="file" onChange={handleImageChange} />
      {!loading && <button type="submit" disabled={!post.image}>Post</button>}
      {loading && <button type="submit" disabled={!post.image}>Loading</button>}
    </PostForm>
  );
};

export default New;
