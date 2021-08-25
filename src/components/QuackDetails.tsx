import React from 'react';
import {
  Text,
  Avatar,
  Box,
  Flex,
  HStack,
  IconButton,
  Link,
  LinkOverlay,
  Spacer,
  VStack,
  Stack,
  Divider,
} from '@chakra-ui/react';
import {
  AiOutlineMessage,
  AiOutlineHeart,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import { ComposeQuack } from './Feed/ComposeQuack';
import Quack from './Feed/Quack';

interface IQuackDetails {}

export const QuackDetails: React.FC<IQuackDetails> = () => {
  return (
    <Stack maxW="xl" spacing="4">
      <Flex>
        <Avatar as={Link} to="/username" name="username" src="" />
        <Stack ml="2" spacing="-1">
          <Text fontWeight="bold">Username </Text>
          <Text fontWeight="normal" color="gray.500">
            @duck
          </Text>
        </Stack>
      </Flex>
      <Text>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit corrupti
        suscipit doloribus et amet voluptates, natus facilis repudiandae ea
        animi nam perferendis tenetur nesciunt, reprehenderit ad. Blanditiis
        numquam temporibus suscipit!
      </Text>
      <Flex>
        <HStack my="2">
          <Text>
            <Text fontWeight="bold" as="span">
              123
            </Text>{' '}
            Likes
          </Text>
        </HStack>
      </Flex>
      <Flex ml="-3">
        <IconButton
          icon={<AiOutlineMessage size="20" />}
          aria-label="Write comment"
          variant="ghost"
          as={Link}
          to="compose/quack"
        />
        <Spacer />
        <IconButton
          // icon={<AiFillHeart size="20" />}
          icon={<AiOutlineHeart size="20" />}
          aria-label="Like Quack"
          variant="ghost"
        />
        <Spacer />
        <IconButton
          icon={<AiOutlineShareAlt size="20" />}
          aria-label="Share Quack"
          variant="ghost"
        />
      </Flex>
      <Box pl="6">
        <ComposeQuack placeholderText="Quack your reply" />
        <Divider mb="5" />
        <Quack />
        <Divider mb="5" />
        <Quack />
        <Divider mb="5" />
        <Quack />
        <Divider mb="5" />
        <Quack />
      </Box>
    </Stack>
  );
};
