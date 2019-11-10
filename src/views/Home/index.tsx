import React from 'react';
// import { useAuth0 } from '../../utils/auth/useAuth';
import { useAuth0 } from '../../utils/AuthContext';

import { Container, Button } from './styles';

const Home: React.FC = (): JSX.Element => {
  const { isAuthenticated, loginWithRedirect } = useAuth0();
  return (
    <Container>
      {isAuthenticated && <h4>You are logged in!</h4>}
      {!isAuthenticated && (
        <span>
          You are not logged in! Please
          <Button onClick={() => loginWithRedirect({})}>
            Log In
          </Button>
          to continue.
        </span>
      )}
    </Container>
  );
};

export default Home;