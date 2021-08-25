import React from 'react';
import { Box, Divider } from '@chakra-ui/react';
import Quack from './Quack';

export const Feed: React.FC = () => (
  <Box maxW="xl">
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
