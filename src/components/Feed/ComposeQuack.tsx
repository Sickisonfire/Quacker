import React from 'react';
import {
  Avatar,
  Flex,
  Button,
  IconButton,
  Spacer,
  Textarea,
} from '@chakra-ui/react';
import { IoImageOutline } from 'react-icons/io5';
import { AiOutlineGif } from 'react-icons/ai';
interface Props {}

export const ComposeQuack: React.FC<Props> = () => {
  return (
    <Flex align="start">
      <Avatar />
      <Flex direction="column" flexGrow={1}>
        <Textarea
          placeholder="Whats happening?"
          size="lg"
          border="none"
          ml="2"
          resize="vertical"
          overflow="hidden"
        />
        <Flex my="2">
          <IconButton
            variant="ghost"
            icon={<IoImageOutline size="20" />}
            aria-label="upload image"
            mr="1"
          />
          <IconButton
            variant="ghost"
            icon={<AiOutlineGif size="20" />}
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
