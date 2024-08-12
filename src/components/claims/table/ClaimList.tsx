// ClaimList.js

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
import ClaimData from './ClaimData';

export default function ClaimList() {
  return (
    <Box mt={5} fontFamily="Arial, sans-serif" fontSize="14px">
      <Box overflowX="auto" maxW="1600px">
        <TableContainer>
          <Table variant="striped" colorScheme="blue">
            <Thead>
              <Tr>
                <Th>Statement as at date</Th>
                <Th>Claim No</Th>
                <Th>Insured</Th>
                <Th>LOB</Th>
                <Th>Date of Loss</Th>
                <Th>Year of Loss</Th>
                <Th>Paid to date</Th>
                <Th>Incurred to date</Th>
                <Th>Loss to layer (Paid basis)</Th>
                <Th>Loss to layer (Incurred basis)</Th>
                <Th>Reinstatement Premium (Paid basis)</Th>
                <Th>Reinstatement Premium (Incurred basis)</Th>
                <Th>RI Margin (Paid basis)</Th>
                <Th>RI Margin (Incurred basis)</Th>
              </Tr>
            </Thead>
            <Tbody>
              {ClaimData.map((item, index) => (
                <Tr key={index}>
                  <Td>{item.statementDate}</Td>
                  <Td>{item.claimNo}</Td>
                  <Td>{item.insured}</Td>
                  <Td>{item.lob}</Td>
                  <Td>{item.dateOfLoss}</Td>
                  <Td>{item.yearOfLoss}</Td>
                  <Td>{item.paidToDate}</Td>
                  <Td>{item.incurredToDate}</Td>
                  <Td>{item.lossToLayerPaid}</Td>
                  <Td>{item.lossToLayerIncurred}</Td>
                  <Td>{item.reinstatementPremiumPaid}</Td>
                  <Td>{item.reinstatementPremiumIncurred}</Td>
                  <Td>{item.riMarginPaid}</Td>
                  <Td>{item.riMarginIncurred}</Td>
                </Tr>
              ))}
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
