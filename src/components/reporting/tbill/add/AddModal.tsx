import React from 'react';
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  FormControl,
  FormLabel,
  Input,
  NumberInput,
  NumberInputField,
  Button,
} from '@chakra-ui/react';

interface AddModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function AddModal({ isOpen, onClose }: AddModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Add New Entry</ModalHeader>
        <ModalBody>
          <FormControl mb={4}>
            <FormLabel htmlFor="date1">Statement as at date</FormLabel>
            <Input id="date1" type="date" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="date2">Date of Tbill</FormLabel>
            <Input id="date2" type="date" />
          </FormControl>
          <FormControl mb={4}>
            <FormLabel htmlFor="numeric">Interest (basis point)</FormLabel>
            <NumberInput id="numeric" min={0}>
              <NumberInputField />
            </NumberInput>
          </FormControl>
        </ModalBody>
        <ModalFooter>
          <Button
            colorScheme="blue"
            mr={3}
            onClick={() => {
              // Handle save action here
              onClose(); // Close the modal after saving
            }}
          >
            Save
          </Button>
          <Button colorScheme="red" onClick={onClose}>
            Cancel
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
