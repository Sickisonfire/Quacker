import React from 'react';
import {
  Button,
  chakra,
  FormControl,
  FormLabel,
  HTMLChakraProps,
  Input,
  Stack,
  Flex,
  Box,
  InputGroup,
  InputRightElement,
  IconButton,
  useColorModeValue,
  useDisclosure,
} from '@chakra-ui/react';
import { HiEye, HiEyeOff } from 'react-icons/hi';

export const SignupForm = (props: HTMLChakraProps<'form'>) => {
  const { isOpen, onToggle } = useDisclosure();

  return (
    <chakra.form
      onSubmit={e => {
        e.preventDefault();
        // your login logic here
      }}
      {...props}
    >
      <Stack spacing="6">
        <FormControl id="email">
          <FormLabel>Email address</FormLabel>
          <Input name="email" type="email" autoComplete="email" required />
        </FormControl>
        <FormControl id="password">
          <Flex justify="space-between">
            <FormLabel>Password</FormLabel>
          </Flex>
          <InputGroup>
            <InputRightElement>
              <IconButton
                bg="transparent !important"
                variant="ghost"
                aria-label={isOpen ? 'Mask password' : 'Reveal password'}
                icon={isOpen ? <HiEyeOff /> : <HiEye />}
                onClick={onToggle}
              />
            </InputRightElement>
            <Input
              name="password"
              type={isOpen ? 'text' : 'password'}
              autoComplete="current-password"
              required
            />
          </InputGroup>
        </FormControl>

        <Button type="submit" colorScheme="blue" size="lg" fontSize="md">
          Sign up
        </Button>
      </Stack>
    </chakra.form>
  );
};
