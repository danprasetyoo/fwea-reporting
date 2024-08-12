import React from 'react';
import { Flex, Button, useDisclosure } from '@chakra-ui/react';
import EditModal from './EditModal';

export default function Edit() {
  const { isOpen, onOpen, onClose } = useDisclosure(); // Chakra UI hook for modal

  return (
    <Flex pr={5} justifyContent="flex-end">
      <Button
        color="white"
        bg="yellow.400"
        fontFamily="Arial, sans-serif"
        fontSize="16px"
        borderRadius="md"
        boxShadow="md"
        _hover={{
          bg: 'yellow.500',
          boxShadow: 'lg',
        }}
        _active={{
          bg: 'yellow.700',
          boxShadow: 'none',
        }}
        _focus={{
          boxShadow: 'outline',
        }}
        transition="all 0.2s ease-in-out"
        onClick={onOpen} // Open modal on click
      >
        Edit
      </Button>

      {/* Include the modal component here */}
      <EditModal isOpen={isOpen} onClose={onClose} />
    </Flex>
  );
}
