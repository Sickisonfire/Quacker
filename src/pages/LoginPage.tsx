import React from 'react';
import {
  Box,
  useColorModeValue,
  Heading,
  Text,
  SimpleGrid,
  Button,
  VisuallyHidden,
} from '@chakra-ui/react';
import { Card } from '../components/Card/Card';
import { LoginForm } from '../components/LoginForm/LoginForm';
import { DividerWithText } from '../components/DividerWithText/DividerWithText';
import { StyledLink } from '../components/Link/Link';
import { Logo } from '../components/Logo/Logo';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';

const LoginPage = () => {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'inherit')}
      minH="100vh"
      py="12"
      px={{ base: '4', lg: '8' }}
    >
      <Box maxW="md" mx="auto">
        <Logo mx="auto" h="20" mb={{ base: '10', md: '20' }} />
        <Heading textAlign="center" size="xl" fontWeight="extrabold">
          Sign in to your account
        </Heading>
        <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
          <Text as="span">Don&apos;t have an account?</Text>
          <StyledLink to="#">Sign up, it&apos;s free!</StyledLink>
        </Text>
        <Card>
          <LoginForm />
          <DividerWithText mt="6">or continue with</DividerWithText>
          <SimpleGrid mt="6" columns={3} spacing="3">
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Facebook</VisuallyHidden>
              <FaFacebook />
            </Button>
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Google</VisuallyHidden>
              <FaGoogle />
            </Button>
            <Button color="currentColor" variant="outline">
              <VisuallyHidden>Login with Github</VisuallyHidden>
              <FaGithub />
            </Button>
          </SimpleGrid>
        </Card>
      </Box>
    </Box>
  );
};

export default LoginPage;
