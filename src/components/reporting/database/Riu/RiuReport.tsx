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
  Text,
} from '@chakra-ui/react';
import RiuData from './RiuData'; // Make sure RiuData is imported correctly

export default function RiuReport() {
  const getRowColor = (description: any) => {
    switch (description) {
      case 'Gross Funds Balance':
      case 'Net Funds Balance':
        return 'blue.100';
      default:
        return 'transparent';
    }
  };

  const getTextStyle = (description: any) => {
    switch (description) {
      case 'Gross Funds Balance':
      case 'Net Funds Balance':
        return { fontWeight: 'bold', fontStyle: 'italic' };
      default:
        return {};
    }
  };

  return (
    <Box
      fontFamily="Arial, sans-serif"
      fontSize="16px" // Setting font size to 16px
      border="1px"
      borderColor="gray.200"
      p={4}
      overflowX="auto"
    >
      <Box maxW="100%">
        <TableContainer>
          <Table width="full">
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
                <Tr key={index} bg={getRowColor(item.description)}>
                  <Td textAlign="center" p={2}>
                    {item.statementDate}
                  </Td>
                  <Td textAlign="start" p={2}>
                    <Text style={getTextStyle(item.description)}>
                      {item.description}
                    </Text>
                  </Td>
                  <Td textAlign="center" p={2}>
                    {item.parameter}
                  </Td>
                  <Td textAlign="end" p={2}>
                    {item.pdmaUsd}
                  </Td>
                  <Td textAlign="end" p={2}>
                    {item.pdmaIdr}
                  </Td>
                  <Td textAlign="end" p={2}>
                    {item.maUsd}
                  </Td>
                  <Td textAlign="end" p={2}>
                    {item.maIdr}
                  </Td>
                  <Td textAlign="end" p={2}>
                    {item.liabilityUsd}
                  </Td>
                  <Td textAlign="end" p={2}>
                    {item.liabilityIdr}
                  </Td>
                  <Td textAlign="end" p={2}>
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
