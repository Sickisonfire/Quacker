import {
  Avatar,
  Box,
  ChakraProps,
  Text,
  Heading,
  HStack,
  Icon,
  Image,
  Flex,
  Button,
  ButtonGroup,
  Spacer,
} from '@chakra-ui/react';

import React from 'react';
import { BiAt, BiCalendar, BiGlobe, BiMap } from 'react-icons/bi';
import { Feed } from '../Feed/Feed';

interface IProfileProps extends ChakraProps {}
export const Profile: React.FC<IProfileProps> = () => {
  return (
    <Box>
      <Image
        w="full"
        maxH="200"
        src="https://www.fillmurray.com/600/200"
        zIndex="banner"
      />
      <Flex direction="column" mx="4" my="4">
        <Flex position="relative">
          <Avatar
            name="Quack"
            src="https://www.fillmurray.com/300/300"
            objectFit="cover"
            maxW={{ md: 'lg', xl: '2xl' }}
            size="2xl"
            position="absolute"
            bottom="0"
          />
          <Spacer />
          <ButtonGroup>
            <Button variant="outline" colorScheme="green">
              Follow
            </Button>
          </ButtonGroup>
        </Flex>
        <Box mt="6">
          <Heading>Fill Murray</Heading>
          <Text mt="-2" color="gray.500">
            <Icon as={BiAt} />
            Fillmurray
          </Text>
          <Text py="4">Bio of Fill Murray goes here </Text>
          <HStack>
            <Text>
              <Icon as={BiMap} />
              Pond
            </Text>
            <Text>
              <Icon as={BiGlobe} />
              quack.com
            </Text>
            <Text>
              <Icon as={BiCalendar} />
              Joined January 2021
            </Text>
          </HStack>
          <HStack mt="4" color="gray.500">
            <Text>
              <Text as="span" fontWeight="bold">
                800
              </Text>{' '}
              Following
            </Text>
            <Text>
              <Text as="span" fontWeight="bold">
                800
              </Text>{' '}
              Followers
            </Text>
          </HStack>
        </Box>
      </Flex>
      <Heading mt="6" mb="4" fontSize="xl" fontWeight="bold">
        Quacks
      </Heading>
      <Feed />
    </Box>
  );
};
