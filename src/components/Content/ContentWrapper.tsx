import React from 'react';
import Quack from '../Feed/Quack';
import { Divider, Box, Flex, ChakraProps } from '@chakra-ui/react';
import { ComposeQuack } from '../Feed/ComposeQuack';
import { ContentHeader } from './ContentHeader';
import { SideContentWrapper } from '../SideContent/SideContentWrapper';
import { Searchbar } from '../Searchbar/Searchbar';
import { Feed } from '../Feed/Feed';

interface IContentWrapper extends ChakraProps {}

export const ContentWrapper: React.FC<IContentWrapper> = ({ children }) => {
  return (
    <Flex>
      <Box>
        <ContentHeader />
        {children}
      </Box>
      <SideContentWrapper>
        <Searchbar />
      </SideContentWrapper>
    </Flex>
  );
};
