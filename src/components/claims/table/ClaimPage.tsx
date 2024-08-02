import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import ClaimList from './ClaimList';

export default function TBill() {
  return (
    <Box p={5}>
      <Text fontSize="6xl" fontFamily="Arial, sans-serif" fontWeight="bold">
        Claims Table
      </Text>
      <ClaimList />
    </Box>
  );
}
