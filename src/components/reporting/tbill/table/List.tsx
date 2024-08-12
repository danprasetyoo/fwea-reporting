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
import Edit from '../edit/Edit';
import TbillData from './TbillData';

export default function List() {
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
              <Th textAlign="center">Action</Th>
            </Tr>
          </Thead>
          <Tbody>
            {TbillData.map((item) => (
              <Tr key={item.no}>
                <Td>{item.no}</Td>
                <Td>{item.statementDate}</Td>
                <Td>{item.dateOfTbill}</Td>
                <Td isNumeric>{item.interestBasisPoint}</Td>
                <Td>
                  <Edit />
                </Td>
              </Tr>
            ))}
          </Tbody>
          <Tfoot>
            <Tr>
              <Th>No</Th>
              <Th>Statement as at date</Th>
              <Th>Date of Tbill</Th>
              <Th isNumeric>Interest (basis point)</Th>
              <Th textAlign="center">Action</Th>
            </Tr>
          </Tfoot>
        </Table>
      </TableContainer>
    </Box>
  );
}
