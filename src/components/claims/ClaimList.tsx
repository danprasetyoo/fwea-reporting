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
      <TableContainer>
        <Table variant="striped" colorScheme="blue">
          <Thead>
            <Tr>
              <Th>No</Th>
              <Th>Statement as at date</Th>
              <Th>Date of Tbill</Th>
              <Th isNumeric>Interest (basis point)</Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>31/03/2021</Td>
              <Td>03/01/2021</Td>
              <Td isNumeric>0.09</Td>
            </Tr>
            <Tr>
              <Td>2</Td>
              <Td>30/06/2021</Td>
              <Td>01/04/2021</Td>
              <Td isNumeric>0.02</Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>30/09/2021</Td>
              <Td>01/07/2021</Td>
              <Td isNumeric>0.05</Td>
            </Tr>
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>No</Th>
              <Th>Statement as at date</Th>
              <Th>Date of Tbill</Th>
              <Th isNumeric>Interest (basis point)</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
}
