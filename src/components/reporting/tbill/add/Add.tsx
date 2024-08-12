import React from 'react';
import { Flex, Button, useDisclosure } from '@chakra-ui/react';
import AddModal from './AddModal';

export default function AddButton() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hook for modal

  return (
    <Flex mt={5} pr={5} justifyContent="flex-end">
      <Button
        color="white"
        bg="green.300"
        fontFamily="Arial, sans-serif"
        fontSize="16px"
        borderRadius="md"
        boxShadow="md"
        _hover={{
          bg: 'green.500',
          boxShadow: 'lg',
        }}
        _active={{
          bg: 'green.700',
          boxShadow: 'none',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        transition="all 0.2s ease-in-out"
        onClick={onOpen} // Open modal on click
      >
        Add
      </Button>

      {/* Include the modal component here */}
      <AddModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
