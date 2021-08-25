import React from 'react';
import {
  Avatar,
  Box,
  Text,
  HStack,
  Flex,
  IconButton,
  Spacer,
  LinkBox,
  LinkOverlay,
} from '@chakra-ui/react';
import {
  AiOutlineMessage,
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineShareAlt,
} from 'react-icons/ai';
import { Link } from 'react-router-dom';
const Quack = () => {
  return (
    <LinkBox>
      <HStack align="start" my="5">
        <Avatar as={Link} to="/username" name="username" src="" />
        <Box>
          <HStack as={Link} to="/username">
            <Text fontWeight="bold">Username </Text>
            <Text fontWeight="normal" color="gray.500">
              @duck
            </Text>
            <Text fontWeight="normal" color="gray.500">
              · 20min
            </Text>
          </HStack>
          <LinkOverlay as={Link} to="/username/status/quackid">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odit
            corrupti suscipit doloribus et amet voluptates, natus facilis
            repudiandae ea animi nam perferendis tenetur nesciunt, reprehenderit
            ad. Blanditiis numquam temporibus suscipit!
          </LinkOverlay>
          <Flex mt="2" ml="-3">
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
        </Box>
      </HStack>
    </LinkBox>
  );
};

export default Quack;
