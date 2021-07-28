import {
  ChakraProps,
  Flex,
  useBreakpointValue,
  useColorModeValue,
  VStack,
} from '@chakra-ui/react';
import React from 'react';

interface ISideContentWrapperProps extends ChakraProps {}

export const SideContentWrapper: React.FC<ISideContentWrapperProps> = ({
  children,
}) => {
  const isXL = useBreakpointValue({ lg: true });
  const bg = useColorModeValue<string, string>('white', 'gray.800');
  return (
    <>
      {isXL && (
        <VStack px="8">
          <Flex
            align="center"
            pos="sticky"
            h="70"
            top="0"
            zIndex="sticky"
            bg={bg}
          >
            {children}
          </Flex>
        </VStack>
      )}
    </>
  );
};
