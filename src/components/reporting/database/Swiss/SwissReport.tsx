import React from 'react';
import {
  Box,
  TableContainer,
  Table,
  Tr,
  Thead,
  Tbody,
  Td,
} from '@chakra-ui/react';
import SwissData from './SwissData';

// Define the type for the data with numeric values
interface SwissDataType {
  openingFunds: number;
  minimumDeposit: number;
  brokerage1: number;
  reinsuranceMargin1: number;
  claimPaid: number;
  reinstatementPremiums1: number;
  reinsuranceMargin2: number;
  adjustmentPremiumYear: number;
  brokerage2: number;
  reinsuranceMargin3: number;
  interestCredit: number;
  grossFunds: number;
  lossAdditional: number;
  claimsOutstanding: number;
  reinstatementPremiums2: number;
  reinsuranceMargin: number;
  netFunds: number;
}

export default function SwissReport() {
  const data: SwissDataType = SwissData[0]; // Assuming SwissData has at least one entry

  // Get the keys from the data object
  const keys = Object.keys(data) as Array<keyof SwissDataType>;

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
                <Td colSpan={keys.length} textAlign="center" p={2}>
                  Cash to Swiss Re
                </Td>
              </Tr>
              <Tr>
                <Td colSpan={keys.length} textAlign="center" p={2}>
                  USD
                </Td>
              </Tr>
            </Thead>
            <Tbody>
              {keys.map((key, index) => (
                <Tr key={index}>
                  <Td textAlign="start" p={2}>
                    {data[key] || 'N/A'}{' '}
                    {/* Display the value or 'N/A' if not available */}
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
