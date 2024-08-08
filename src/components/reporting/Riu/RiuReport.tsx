import React from 'react';
import {
  Box,
  TableContainer,
  Table,
  Tr,
  Thead,
  Th,
  Tbody,
  Td,
} from '@chakra-ui/react';
import RiuData from './RiuData';

export default function RiuReport() {
  return (
    <Box
      fontFamily="Arial, sans-serif"
      fontSize="16px" // Mengubah fontSize menjadi 16px
      border="1px"
      borderColor="gray.200"
      p={4}
      overflowX="auto"
    >
      <Box maxW="100%">
        <TableContainer>
          <Table variant="striped" colorScheme="blue" width="full">
            <Thead>
              <Tr>
                <Th textAlign="center" rowSpan={2} p={2}>
                  Statement as at
                </Th>
                <Th textAlign="center" rowSpan={2} p={2}>
                  Description
                </Th>
                <Th textAlign="center" rowSpan={2} p={2}>
                  Parameter
                </Th>
                <Th textAlign="center" colSpan={2} p={2}>
                  PDMA
                </Th>
                <Th textAlign="center" colSpan={2} p={2}>
                  Marine & Aviation
                </Th>
                <Th textAlign="center" colSpan={2} p={2}>
                  Liability
                </Th>
                <Th textAlign="center" p={2}>
                  FWEA Total
                </Th>
              </Tr>
              <Tr>
                <Th textAlign="center" p={2}>
                  USD
                </Th>
                <Th textAlign="center" p={2}>
                  IDR
                </Th>
                <Th textAlign="center" p={2}>
                  USD
                </Th>
                <Th textAlign="center" p={2}>
                  IDR
                </Th>
                <Th textAlign="center" p={2}>
                  USD
                </Th>
                <Th textAlign="center" p={2}>
                  IDR
                </Th>
                <Th textAlign="center" p={2}>
                  USD
                </Th>
              </Tr>
            </Thead>
            <Tbody>
              {RiuData.map((item, index) => (
                <Tr key={index}>
                  <Td textAlign="center" p={2}>
                    {item.statementDate}
                  </Td>
                  <Td textAlign="center" p={2}>
                    {item.description}
                  </Td>
                  <Td textAlign="center" p={2}>
                    {item.parameter}
                  </Td>
                  <Td textAlign="center" p={2}>
                    {item.pdmaUsd}
                  </Td>
                  <Td textAlign="center" p={2}>
                    {item.pdmaIdr}
                  </Td>
                  <Td textAlign="center" p={2}>
                    {item.maUsd}
                  </Td>
                  <Td textAlign="center" p={2}>
                    {item.maIdr}
                  </Td>
                  <Td textAlign="center" p={2}>
                    {item.liabilityUsd}
                  </Td>
                  <Td textAlign="center" p={2}>
                    {item.liabilityIdr}
                  </Td>
                  <Td textAlign="center" p={2}>
                    {item.fweaUsd}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
