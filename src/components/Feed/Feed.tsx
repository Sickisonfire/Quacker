import React from 'react';
import Quack from './Quack';
import { Divider, Box } from '@chakra-ui/react';
import { ComposeQuack } from './ComposeQuack';
import { FeedHeader } from './FeedHeader';

interface IFeedProps {}

export const Feed: React.FC<IFeedProps> = () => {
  return (
    <Box>
      <FeedHeader />
      <ComposeQuack />
      <Divider mb="5" />
      <Quack />
      <Divider mb="5" />
      <Quack />
      <Divider mb="5" />
      <Quack />
      <Divider mb="5" />
      <Quack />
    </Box>
  );
};
