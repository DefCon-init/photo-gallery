/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { match } from "react-router-dom";
import { useAuth0 } from '../../utils/AuthContext';
// import io from 'socket.io-client';

// import UserCard from '../../components/UserCard'
import Loader from '../../components/Loader';

import {
  PostList,
  Article,
  NoPost
} from './styles';

// import { data } from "../../data/posts";
import graphQlAPI from '../../utils/api';

type Parms = { email: string }

type FeedParams = { match?: match<Parms> };

interface Post {
  id: string;
  image: string;
  createdAt?: string;
}

const Feed: React.FC<FeedParams> = ({ match }): JSX.Element => {
  const { loading, user } = useAuth0();

  const [feed, setFeed] = useState<Post[]>([]);

  const loadRequest = async (email) => {
    let requestBody = {
      query: `
        query userByEmail($email: String!) {
          userByEmail(email: $email) {
            id
            email
            posts {
              image
              id
              date
            }
          }
        }
      `,
      variables: {
        email: email
      }
    };
    const response = await graphQlAPI.post('', requestBody);
    const { data: { data: { userByEmail } } } = response;
    const { posts } =  userByEmail
    console.log(posts)
    setFeed(posts);
  };

  // const handleLike = (id: string) => {
  //   api.post(`posts/${id}/like`);
  // };

  useEffect(() => {
    console.log('1 Feed', match, user)
    let { params: { email } } = match
    console.log('1 email', email, !!email)
    if (!email) {
      console.log('2 email', user.email)
      email = user.email
    }
    console.log('3 email', email)

    // socket.on('upload', (newPost: Post) => {
    //   console.log('is uplooooooaaaaaddd', Post)
    //   setFeed(f => [newPost, ...f]);
    // });

    // socket.on('like', (likedPost: Post) => {
    //   setFeed((f: Post[]) => f.map((post: Post) => (post._id === likedPost._id ? likedPost : post)));
    // });

    loadRequest(email);
  }, [match, user]);

  if (loading || !user) {
    return (
      <Loader></Loader>
    );
  }

  return (
    <>
      {/* <UserCard name={user.nickname} image={user.picture} /> */}
      <PostList>
        {feed && feed.length > 0 && feed.map((post: Post) => (
          <Article key={post.id}>
            <img src={`${post.image}`} alt="" />
          </Article>
        ))}
        {feed && feed.length === 0 && (
          <NoPost>
            <p>No post to show!</p>
          </NoPost>
        )}
      </PostList>
    </>
  );
};

export default Feed;
