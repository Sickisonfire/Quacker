import React from 'react';
import Quack from './Quack';
import { Divider, Heading } from '@chakra-ui/react';
import { ComposeQuack } from './ComposeQuack';
interface Props {}

export const Feed: React.FC<Props> = () => {
  return (
    <div>
      <Heading fontSize="xl" py="5">
        Home
      </Heading>
      <Divider mb="5" />
      <ComposeQuack />
      <Divider mb="5" />
      <Quack />
      <Divider mb="5" />
      <Quack />
      <Divider mb="5" />
      <Quack />
      <Divider mb="5" />
      <Quack />
    </div>
  );
};
