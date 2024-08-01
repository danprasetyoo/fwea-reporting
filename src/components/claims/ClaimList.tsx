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
      <Box
        overflowX="auto" // Enable vertical scrolling
        maxW="1300px" // Set a maximum height for the table container
      >
        <TableContainer>
          <Table variant="striped" colorScheme="blue">
            <Thead>
              <Tr>
                <Th w="12%">Statement as at date</Th>
                <Th w="10%">Claim No</Th>
                <Th w="10%">Insured</Th>
                <Th w="8%">LOB</Th>
                <Th w="12%">Date of Loss</Th>
                <Th w="10%">Year of Loss</Th>
                <Th w="12%">Paid to date</Th>
                <Th w="12%">Incurred to date</Th>
                <Th w="15%">Loss to layer (Paid basis)</Th>
                <Th w="15%">Loss to layer (Incurred basis)</Th>
                <Th w="15%">Reinstatement Premium (Paid basis)</Th>
                <Th w="15%">Reinstatement Premium (Incurred basis)</Th>
                <Th w="15%">RI Margin (Paid basis)</Th>
                <Th w="15%">RI Margin (Incurred basis)</Th>
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
            </Tbody>
            <Tfoot>
              <Tr>
                <Th w="12%">Statement as at date</Th>
                <Th w="10%">Claim No</Th>
                <Th w="10%">Insured</Th>
                <Th w="8%">LOB</Th>
                <Th w="12%">Date of Loss</Th>
                <Th w="10%">Year of Loss</Th>
                <Th w="12%">Paid to date</Th>
                <Th w="12%">Incurred to date</Th>
                <Th w="15%">Loss to layer (Paid basis)</Th>
                <Th w="15%">Loss to layer (Incurred basis)</Th>
                <Th w="15%">Reinstatement Premium (Paid basis)</Th>
                <Th w="15%">Reinstatement Premium (Incurred basis)</Th>
                <Th w="15%">RI Margin (Paid basis)</Th>
                <Th w="15%">RI Margin (Incurred basis)</Th>
              </Tr>
            </Tfoot>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}
