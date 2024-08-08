import React from 'react';
import { Box, Text } from '@chakra-ui/react';

export default function RiuReport() {
  return (
    <Box border="1px" borderColor="gray.200" p={4}>
      <Text fontSize="lg" fontWeight="bold">
        Sub-Kolom 1
      </Text>
      <Text mt={2}>Konten untuk sub-kolom 1.</Text>
    </Box>
  );
}
