/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';

import UserCard from '../../components/UserCard'

import {
  UserList
} from './styles';

import { data } from "../../data/users";
import { Link } from 'react-router-dom';

interface User {
  email: string;
  name: string;
  image: string
}

const Users: React.FC = (): JSX.Element => {
  const [users, setUsers] = useState<User[]>([]);

  const loadRequest = async () => {
    // const response = await api.get('posts');
    const response = data;

    setUsers(response);
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
    <>
      <UserList>
        {users.map((user: User) => (
          <Link to={`${user.email}/feed`}>
            <UserCard key={user.email} name={user.name} image={user.image} />
          </Link>
        ))}
      </UserList>
    </>
  );
};

export default Users;
