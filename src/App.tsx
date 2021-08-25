import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import LoginPage from './pages/LoginPage';
import SignupPage from './pages/SignupPage';
import { Box, Container, Flex, Heading, Spacer } from '@chakra-ui/react';
import { ContentWrapper } from './components/Content/ContentWrapper';
import { Searchbar } from './components/Searchbar/Searchbar';
import SideMenu from './components/SideMenu/SideMenu';
import { Profile } from './components/profile/Profile';
import { ComposeQuack } from './components/Feed/ComposeQuack';
import { Feed } from './components/Feed/Feed';
import { QuackDetails } from './components/QuackDetails';

const App: React.FC = () => {
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
              <Route path="/messages">
                <Heading>W I P </Heading>
              </Route>
              <Route path="/settings">
                <div>settings</div>
              </Route>
              <Route path="/home" exact>
                <ContentWrapper>
                  <ComposeQuack />
                  <Feed />
                </ContentWrapper>
              </Route>
              <Route path="/search">
                <Searchbar />
              </Route>
              <Route path="/:username/status/:quackid">
                <ContentWrapper>
                  <QuackDetails />
                </ContentWrapper>
              </Route>
              <Route path="/:username">
                <ContentWrapper>
                  <Profile />
                </ContentWrapper>
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
