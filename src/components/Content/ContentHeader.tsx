import {
  Flex,
  Text,
  IconButton,
  useColorModeValue,
  ChakraProps,
} from '@chakra-ui/react';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

interface IContentHeaderProps extends ChakraProps {}
export const ContentHeader: React.FC<IContentHeaderProps> = () => {
  const history = useHistory();
  const bg = useColorModeValue('white', 'gray.800');
  return (
    <Flex
      pos="sticky"
      fontSize="xl"
      top="0"
      bg={bg}
      h="70"
      zIndex="sticky"
      borderBottom="1px solid"
      borderColor="gray.700"
      mb="5"
      fontWeight="bold"
      align="center"
    >
      {!(history.location.pathname === '/home') && (
        <IconButton
          aria-label="back"
          fontSize="2xl"
          variant="ghost"
          ml="2"
          icon={<BiArrowBack />}
          onClick={() => history.goBack()}
        />
      )}
      <Text> {history.location.pathname === '/home' ? 'Home' : 'Quack'} </Text>
    </Flex>
  );
};