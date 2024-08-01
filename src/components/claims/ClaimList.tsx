import {
  Box,
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableContainer,
} from '@chakra-ui/react';

export default function ClaimList() {
  return (
    <Box mt={5} fontFamily="Arial, sans-serif" fontSize="16px">
      <Box overflowX="auto" maxW="1200px">
        <TableContainer>
          <Table variant="striped" colorScheme="blue">
            <Thead>
              <Tr>
                <Th minW="12%">Statement as at date</Th>
                <Th minW="10%">Claim No</Th>
                <Th minW="10%">Insured</Th>
                <Th minW="8%">LOB</Th>
                <Th minW="12%">Date of Loss</Th>
                <Th minW="10%">Year of Loss</Th>
                <Th minW="12%">Paid to date</Th>
                <Th minW="12%">Incurred to date</Th>
                <Th minW="15%">Loss to layer (Paid basis)</Th>
                <Th minW="15%">Loss to layer (Incurred basis)</Th>
                <Th minW="15%">Reinstatement Premium (Paid basis)</Th>
                <Th minW="15%">Reinstatement Premium (Incurred basis)</Th>
                <Th minW="15%">RI Margin (Paid basis)</Th>
                <Th minW="15%">RI Margin (Incurred basis)</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
                <Td></Td>
              </Tr>
              {/* Add more rows here as needed */}
            </Tbody>
            <Tfoot>
              <Tr>
                <Th minW="12%">Statement as at date</Th>
                <Th minW="10%">Claim No</Th>
                <Th minW="10%">Insured</Th>
                <Th minW="8%">LOB</Th>
                <Th minW="12%">Date of Loss</Th>
                <Th minW="10%">Year of Loss</Th>
                <Th minW="12%">Paid to date</Th>
                <Th minW="12%">Incurred to date</Th>
                <Th minW="15%">Loss to layer (Paid basis)</Th>
                <Th minW="15%">Loss to layer (Incurred basis)</Th>
                <Th minW="15%">Reinstatement Premium (Paid basis)</Th>
                <Th minW="15%">Reinstatement Premium (Incurred basis)</Th>
                <Th minW="15%">RI Margin (Paid basis)</Th>
                <Th minW="15%">RI Margin (Incurred basis)</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
