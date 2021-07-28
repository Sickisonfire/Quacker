import React from 'react';
import Quack from '../Feed/Quack';
import { Divider, Box, Flex, ChakraProps } from '@chakra-ui/react';
import { ComposeQuack } from '../Feed/ComposeQuack';
import { ContentHeader } from './ContentHeader';
import { SideContentWrapper } from '../SideContent/SideContentWrapper';
import { Searchbar } from '../Searchbar/Searchbar';

interface IContentWrapper extends ChakraProps {}

export const ContentWrapper: React.FC<IContentWrapper> = () => {
  return (
    <Flex>
      <Box maxW="xl">
        <ContentHeader />
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
      <SideContentWrapper>
        <Searchbar />
      </SideContentWrapper>
    </Flex>
  );
};
