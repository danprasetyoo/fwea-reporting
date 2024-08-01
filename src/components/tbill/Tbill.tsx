import React from 'react';
import { Text, Box } from '@chakra-ui/react';
import Add from './add/Add';
import List from './table/List';

export default function TBill() {
  return (
    <Box p={5}>
      <Text fontSize="6xl" fontFamily="Arial, sans-serif" fontWeight="bold">
        T-bill
      </Text>
      <Add />
      <List />
    </Box>
  );
}
