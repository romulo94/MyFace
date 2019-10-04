import React from 'react';
import { Router } from 'react-router-dom';
import GlobalSytle from './styles/global';
import Routes from './routes';
import history from '~/services/history';

function App() {
  return (
    <Router history={history}>
      <GlobalSytle />
      <Routes />
    </Router>
  );
}

export default App;
