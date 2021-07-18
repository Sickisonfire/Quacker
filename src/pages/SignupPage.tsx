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
import { DividerWithText } from '../components/DividerWithText/DividerWithText';
import { StyledLink } from '../components/Link/Link';
import { Logo } from '../components/Logo/Logo';
import { FaFacebook, FaGoogle, FaGithub } from 'react-icons/fa';
import { SignupForm } from '../components/SignupForm/SignupForm';

const SignupPage = () => {
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
          Create an Account
        </Heading>
        <Text mt="4" mb="8" align="center" maxW="md" fontWeight="medium">
          <Text as="span">Already have an account?</Text>
          <StyledLink to="#">Login!</StyledLink>
        </Text>
        <Card>
          <SignupForm />
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

export default SignupPage;
