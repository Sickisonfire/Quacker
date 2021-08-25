import {
  Flex,
  Text,
  IconButton,
  useColorModeValue,
  ChakraProps,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { BiArrowBack } from 'react-icons/bi';

interface IContentHeaderProps extends ChakraProps {}
export const ContentHeader: React.FC<IContentHeaderProps> = () => {
  const [headerText, setHeaderText] = useState<string>('');

  const history = useHistory();
  const bg = useColorModeValue('white', 'gray.800');

  useEffect(() => {
    const pathName: string = history.location.pathname;
    if (pathName === '/home') {
      setHeaderText('Home');
    } else if (pathName.includes('/status/')) {
      setHeaderText('Quack');
    } else {
      setHeaderText(pathName.slice(1));
    }
  }, [history.location.pathname]);

  return (
    <Flex
      pos="sticky"
      fontSize="xl"
      top="0"
      bg={bg}
      h="70"
      zIndex="sticky"
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
      <Text> {headerText} </Text>
    </Flex>
  );
};
