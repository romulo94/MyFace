import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import GlobalSytle from './styles/global';
import Routes from './routes';

function App() {
  return (
    <Router>
      <GlobalSytle />
      <Routes />
    </Router>
  );
}

export default App;
