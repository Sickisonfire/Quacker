import React from 'react';

import {
  Text,
  Avatar,
  Flex,
  Stack,
  LinkBox,
  LinkOverlay,
  Spacer,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

export const SearchbarItem = () => {
  return (
    <LinkBox w="full" p="2" _hover={{ background: 'gray.600' }}>
      <Flex>
        <Avatar mr="3" />
        <Stack direction="column" spacing="-1">
          <LinkOverlay as={Link} to="/username">
            <Text fontWeight="bold">Username </Text>
          </LinkOverlay>
          <Text fontWeight="normal" color="gray.500" fontSize="sm">
            @duck
          </Text>
        </Stack>
        <Spacer />
      </Flex>
    </LinkBox>
  );
};
