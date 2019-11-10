import React from 'react';
import { Link } from 'react-router-dom';

import { useAuth0 } from '../../utils/AuthContext';

import { Container, MainHeader, Button, UL, Nav, LI } from './styles';

import logo from '../../assets/logo.svg';

const Header = () => {
  const { isAuthenticated, loginWithRedirect, logout, user } = useAuth0();
  console.log('LINK', !!user ? user.email + '/feed' : '/')
  return (
    <MainHeader>
      <Container>
        <Link to='/feed'>
          <img src={logo} alt="Gallery" />
        </Link>
        <Nav>
          <UL>
            <LI>
              {isAuthenticated && (
                <Link to="/new">
                  <Button>Add Post</Button>
                </Link>
              )}
            </LI>
            <LI>
              {isAuthenticated && (
                <Link to="/users">
                  <Button>Users</Button>
                </Link>
              )}
            </LI>
            <LI>
              {isAuthenticated && <Button onClick={() => logout()}>Log out</Button>}
            </LI>
            <LI>
              {!isAuthenticated && (
                <Button
                  onClick={() =>
                    loginWithRedirect({ appState: { targetUrl: '/feed' } })
                  }
                >
                  Log in
                </Button>
              )}
            </LI>
          </UL>
        </Nav>
      </Container>
    </MainHeader>
  );
}

export default Header;
