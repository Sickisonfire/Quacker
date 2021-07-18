import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import React from 'react';

const App = () => {
  return (
    <Router>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="/signup">
        <SignupPage />
      </Route>
      <Route path="/home">
        <div>feed</div>
      </Route>
      <Route path="/messages">
        <div>messages</div>
      </Route>
      <Route path="/settings">
        <div>settings</div>
      </Route>
      <Route path="/user/:username" exact>
        <div>user</div>
      </Route>
    </Router>
  );
};

export default App;
