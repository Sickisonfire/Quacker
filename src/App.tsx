import { BrowserRouter as Router, Route } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import React from 'react';
import SideMenu from './components/SideMenu/SideMenu';
import { Container } from '@chakra-ui/react';
import { Feed } from './components/Feed/Feed';

const App = () => {
  return (
    <Router>
      <Container maxW={['full', 'md', '7xl']}>
        {/*<SideMenu />
         */}
        <Route path="/login">
          <LoginPage />
        </Route>
        <Route path="/signup">
          <SignupPage />
        </Route>
        <Route path="/home">
          <Feed />
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
      </Container>
    </Router>
  );
};

export default App;
