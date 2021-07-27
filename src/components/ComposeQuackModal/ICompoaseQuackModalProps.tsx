import {
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
} from '@chakra-ui/react';
import React from 'react';

interface ICompoaseQuackModalProps {
  isOpen: boolean;
  onClose(): void;
}

export const ComposeQuackModal: React.FC<ICompoaseQuackModalProps> = ({
  isOpen,
  onClose,
}) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>
          <ModalCloseButton />
        </ModalHeader>
        <ModalBody>test</ModalBody>
        <ModalFooter>test</ModalFooter>
      </ModalContent>
    </Modal>
  );
};
