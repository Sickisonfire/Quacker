import {
  Button,
  Divider,
  IconButton,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  useBreakpointValue,
  useDisclosure,
} from '@chakra-ui/react';
import React from 'react';

import { GiDuckPalm } from 'react-icons/gi';
import { ComposeQuack } from '../Feed/ComposeQuack';

interface ICompoaseQuackModalProps {}

export const ComposeQuackModal: React.FC<ICompoaseQuackModalProps> = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isXL = useBreakpointValue({ xl: true });
  return (
    <>
      {isXL ? (
        <Button px="20" colorScheme="green" onClick={onOpen}>
          Quack
        </Button>
      ) : (
        <IconButton
          aria-label="Compose Quack"
          icon={<GiDuckPalm size="28" />}
          fontSize="xl"
          colorScheme="green"
          onClick={onOpen}
        />
      )}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>
            <ModalCloseButton />
          </ModalHeader>
          <ModalBody>
            <Divider my="2" />
            <ComposeQuack />
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};
