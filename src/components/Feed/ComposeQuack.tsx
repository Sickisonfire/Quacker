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
interface IComposeQuackProps {
  placeholderText: string;
}

export const ComposeQuack: React.FC<IComposeQuackProps> = ({
  placeholderText = 'Quack Something!',
}) => {
  return (
    <Flex align="start">
      <Avatar />
      <Flex ml="2" direction="column" flexGrow={1}>
        <Textarea
          placeholder={placeholderText}
          size="lg"
          boxSizing="border-box"
          width="1/2"
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
