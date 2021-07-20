import React from 'react';
import {
  Avatar,
  Flex,
  Button,
  Input,
  IconButton,
  Spacer,
} from '@chakra-ui/react';
import { IoImageOutline } from 'react-icons/io5';
interface Props {}

export const ComposeQuack: React.FC<Props> = () => {
  return (
    <Flex align="start">
      <Avatar />
      <Flex direction="column" flexGrow={1}>
        <Input placeholder="Whats happening?" size="lg" border="none" ml="2" />
        <Flex my="2">
          <IconButton
            variant="ghost"
            icon={<IoImageOutline size="20" />}
            aria-label="upload image"
          />
          <Spacer />
          <Button alignSelf="flex-end" colorScheme="green" disabled>
            Quack
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
};
