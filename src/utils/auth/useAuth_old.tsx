import { useCallback, useMemo } from 'react';
import history from '../history';
import { useAuth0Context } from './AuthContext_old';

const useIsAuthenticated = expiresAt => {
  return useMemo(() => {
    return new Date().getTime() < expiresAt;
  }, [expiresAt]);
};

export const useAuth0 = () => {
  const { auth0, authState, updateAuthState } = useAuth0Context();

  const isAuthenticated = useIsAuthenticated(authState.expiresAt);

  const login = useCallback(() => {
    auth0.authorize();
  }, [auth0]);

  const logout = useCallback(() => {
    updateAuthState({
      accessToken: null,
      idToken: null,
      expiresAt: 0
    });
    localStorage.removeItem('isLoggedIn');

    auth0.logout({
      returnTo: window.location.origin
    });

    // navigate to the home route
    history.replace('/');
  }, [auth0, updateAuthState]);

  const setSession = useCallback(
    authResult => {
      localStorage.setItem('isLoggedIn', 'true');
      localStorage.setItem('authResult', JSON.stringify(authResult));

      let expiresAt = authResult.expiresIn * 1000 + new Date().getTime();
      updateAuthState({
        accessToken: authResult.accessToken,
        idToken: authResult.idToken,
        expiresAt: expiresAt
      });
      history.replace('/');
    },
    [updateAuthState]
  );
  // useDebugValue(authState);

  const renewSession = useCallback(() => {
    auth0.checkSession({}, (err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        setSession(authResult);
      } else if (err) {
        logout();
        console.error(err);
        alert(
          `Could not get a new token (${err.error}: ${err.error_description}).`
        );
      }
    });
  }, [auth0, logout, setSession]);

  const handleAuthentication = useCallback(() => {
    auth0.parseHash((err, authResult) => {
      if (authResult && authResult.accessToken && authResult.idToken) {
        setSession(authResult);
      } else if (err) {
        history.replace('/');
        alert(`Error: ${err.error}. Check the console for further details.`);
      }
    });
  }, [auth0, setSession]);

  return {
    login,
    logout,
    handleAuthentication,
    isAuthenticated,
    renewSession
  };
};
