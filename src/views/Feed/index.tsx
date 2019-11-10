/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import { match } from "react-router-dom";
import { useAuth0 } from '../../utils/AuthContext';

import UserCard from '../../components/UserCard'
import Loader from '../../components/Loader';

import {
  PostList,
  Article
} from './styles';

import { data } from "../../data/posts";

type Parms = { email: string }

type FeedParams = { match?: match<Parms> };

interface Post {
  _id: string;
  author: string;
  place: string;
  image: string | Blob;
  description: string;
  hashtags: string;
  createdAt?: string;
  updateAt?: string;
  likes?: number;
}

const Feed: React.FC<FeedParams> = ({ match }): JSX.Element => {
  const { loading, user } = useAuth0();

  const [feed, setFeed] = useState<Post[]>([]);

  const loadRequest = async () => {
    // const response = await api.get('posts');
    const response = data;

    setFeed(response);
  };

  // const handleLike = (id: string) => {
  //   api.post(`posts/${id}/like`);
  // };

  useEffect(() => {
    console.log('Feed', loading, user, match)
    const { params: { email } } = match
    console.log('email', email)
  });

  useEffect(() => {
    // const socket = io('http://localhost:3333');

    // socket.on('post', (newPost: Post) => {
    //   setFeed(f => [newPost, ...f]);
    // });

    // socket.on('like', (likedPost: Post) => {
    //   setFeed((f: Post[]) => f.map((post: Post) => (post._id === likedPost._id ? likedPost : post)));
    // });

    loadRequest();
  }, []);

  if (loading || !user) {
    return (
      <Loader></Loader>
    );
  }

  return (
    <>
      <UserCard name={user.nickname} image={user.picture} />
      <PostList>
        {feed.map((post: Post) => (
          <Article key={post._id}>
            <img src={`${post.image}`} alt="" />
          </Article>
        ))}
      </PostList>
    </>
  );
};

export default Feed;
