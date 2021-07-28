import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import React from 'react';
import { Box, Container, Flex, Spacer } from '@chakra-ui/react';
import { ContentWrapper } from './components/Content/ContentWrapper';
import { Searchbar } from './components/Searchbar/Searchbar';
import SideMenu from './components/SideMenu/SideMenu';
import { Profile } from './components/profile/Profile';

const App = () => {
  return (
    <Router>
      <Container maxW={['full', 'md', '7xl']}>
        <Flex>
          <Spacer />
          <SideMenu />
          <Box>
            <Switch>
              <Route path="/login">
                <LoginPage />
              </Route>
              <Route path="/signup">
                <SignupPage />
              </Route>
              <Route path="/home" exact>
                <ContentWrapper />
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
                <Profile />
              </Route>
            </Switch>
          </Box>
          <Spacer />
        </Flex>
      </Container>
    </Router>
  );
};

export default App;
