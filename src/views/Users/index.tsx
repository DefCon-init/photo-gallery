/* eslint-disable no-underscore-dangle */
import React, { useEffect, useState } from 'react';

import UserCard from '../../components/UserCard'

import {
  UserList
} from './styles';

import { Link } from 'react-router-dom';
import graphQlAPI from '../../utils/api';

interface User {
  id
  email
}

const Users: React.FC = (): JSX.Element => {
  //eslint-disable-next-line
  const [users, setUsers] = useState<User[]>([]);

  const loadRequest = async () => {
    const requestBody = {
      query: `
          query {
            users {
              id
              email
            }
          }
        `
    };
    const response = await graphQlAPI.post('', requestBody);
    const { data: { data: { users } } } = response
    setUsers(users);
  };

  useEffect(() => {
    loadRequest();
  }, []);

  return (
    <>
      <UserList>
        {!!users && users.map((user: User) => (
          <div key={user.id}>
            <Link to={`${user.email}/feed`}>
              <UserCard name={user.email} />
            </Link>
          </div>
        ))}
      </UserList>
    </>
  );
};

export default Users;
