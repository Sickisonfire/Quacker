import { Link } from 'react-router-dom';
import { Text, useColorModeValue } from '@chakra-ui/react';
import * as React from 'react';

// export const Link = (props: HTMLChakraProps<'a'>) => (
//   <chakra.a
//     marginStart="1"
//     href="#"
//     color={useColorModeValue('blue.500', 'blue.200')}
//     _hover={{ color: useColorModeValue('blue.600', 'blue.300') }}
//     display={{ base: 'block', sm: 'inline' }}
//     {...props}
//   />
// );

type Props = {
  to: string;
  children: React.ReactNode;
};

export const StyledLink: React.FC<Props> = props => (
  <Link to={props.to}>
    <Text
      marginStart="1"
      color={useColorModeValue('blue.500', 'blue.200')}
      _hover={{ color: useColorModeValue('blue.600', 'blue.300') }}
      display={{ base: 'block', sm: 'inline' }}
    >
      {props.children}
    </Text>
  </Link>
);
