/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import api from '../../utils/api';

import {
  PostList,
  Article,
  Header,
  Footer,
  UserInfo,
  Place,
  Name,
  Actions,
  Description,
  Hashtags,
  Likes,
  LikeButton,
} from './styles_old';

import { data } from "../../data/posts";

import more from '../../assets/more.svg';
import like from '../../assets/like.svg';
import comment from '../../assets/comment.svg';
import send from '../../assets/send.svg';

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

const Feed: React.FC = (): JSX.Element => {
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
    // const socket = io('http://localhost:3333');

    // socket.on('post', (newPost: Post) => {
    //   setFeed(f => [newPost, ...f]);
    // });

    // socket.on('like', (likedPost: Post) => {
    //   setFeed((f: Post[]) => f.map((post: Post) => (post._id === likedPost._id ? likedPost : post)));
    // });

    loadRequest();
  }, []);

  return (
    <PostList>
      {feed.map((post: Post) => (
        <Article key={post._id}>
          {/* <Header>
            <UserInfo>
              <Name>{post.author}</Name>
              <Place>{post.place}</Place>
            </UserInfo>
            <img src={more} alt="Mais" />
          </Header> */}
          <img src={`${post.image}`} alt="" />
          {/* <Footer>
            <Actions>
              <LikeButton type="button" onClick={() => handleLike(post._id)}>
                <img src={like} alt="Mais" />
              </LikeButton>
              <img src={comment} alt="Mais" />
              <img src={send} alt="Mais" />
            </Actions>
            <Likes>{post.likes}</Likes>
            <Description>
              {post.description}
              <Hashtags>{post.hashtags}</Hashtags>
            </Description>
          </Footer> */}
        </Article>
      ))}
    </PostList>
  );
};

export default Feed;
