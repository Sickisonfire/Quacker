import { useBreakpointValue, VStack } from '@chakra-ui/react';
import React from 'react';
import { Searchbar } from '../Searchbar/Searchbar';

interface ISideContentProps {}
export const SideContent: React.FC<ISideContentProps> = () => {
  const isXL = useBreakpointValue({ lg: true });
  return (
    <>
      {isXL && (
        <VStack px="8" py="2">
          <Searchbar />
        </VStack>
      )}
    </>
  );
};
