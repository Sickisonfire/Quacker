import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import React from 'react';
import { Box, Container, Flex, Spacer } from '@chakra-ui/react';
import { Feed } from './components/Feed/Feed';
import { Searchbar } from './components/Searchbar/Searchbar';
import { SideContent } from './components/SideContent/SideContent';
import SideMenu from './components/SideMenu/SideMenu';

const App = () => {
  return (
    <Router>
      <Container maxW={['full', 'md', '7xl']}>
        <Flex>
          <Spacer />
          <SideMenu />
          <Box maxW="xl">
            <Switch>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/signup">
                <SignupPage />
              </Route>
              <Route path="/home" exact>
                <Feed />
              </Route>
              <Route path="/messages">
                <div>messages</div>
              </Route>
              <Route path="/settings">
                <div>settings</div>
              </Route>
              <Route path="/search">
                <Searchbar />
              </Route>
              <Route path="/:username">
                <div>user</div>
              </Route>
            </Switch>
          </Box>
          <SideContent />
          <Spacer />
        </Flex>
      </Container>
    </Router>
  );
};

export default App;
