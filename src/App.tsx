import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { useAuth0 } from './utils/AuthContext';

import Routes from './routes';
import Header from './components/Header';
import Loader from './components/Loader';

const App: React.FC = (): JSX.Element => {
  const { loading } = useAuth0();

  if (loading) {
    return (
      <Loader />
    );
  }

  return (
    <BrowserRouter>
      <Header />
      <Routes />
    </BrowserRouter>
  );
}

export default App;
