import React from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Table,
  Tbody,
  Tr,
  Td,
  Th,
  Thead,
} from '@chakra-ui/react';

interface FormDeclareTreatyProps {
  fields: {
    label: string;
    valuePDMA: string;
    valueMA1: string;
    valueMA2: string;
    valueLiability: string;
    onChangePDMA: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeMA1: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeMA2: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeLiability: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }[];
}

const FormDeclareLayer: React.FC<FormDeclareTreatyProps> = ({ fields }) => {
  return (
    <Box p={5} fontFamily="calibri" borderWidth="1px" borderRadius="md">
      <FormControl>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr fontSize="6xl">
              <Th></Th>
              <Th textAlign="center">PDMA Layer 1A</Th>
              <Th textAlign="center">Marine & Aviation Layer 1</Th>
              <Th textAlign="center">Marine & Aviation Layer 2</Th>
              <Th textAlign="center">Liability Layer 1</Th>
            </Tr>
          </Thead>
          <Tbody>
            {fields.map((field, index) => (
              <Tr key={index}>
                <Td>
                  <FormLabel
                    htmlFor={`${field.label}-cy`}
                    mb={0}
                    display="inline"
                  >
                    {field.label}
                  </FormLabel>
                </Td>
                <Td>
                  <Input
                    id={`${field.label}-cy`}
                    type="numeric"
                    placeholder=""
                    value={field.valuePDMA}
                    onChange={field.onChangePDMA}
                  />
                </Td>
                <Td>
                  <Input
                    id={`${field.label}-py`}
                    type="numeric"
                    placeholder=""
                    value={field.valueMA1}
                    onChange={field.onChangeMA1}
                  />
                </Td>
                <Td>
                  <Input
                    id={`${field.label}-cy`}
                    type="numeric"
                    placeholder=""
                    value={field.valueMA2}
                    onChange={field.onChangeMA2}
                  />
                </Td>
                <Td>
                  <Input
                    id={`${field.label}-py`}
                    type="numeric"
                    placeholder=""
                    value={field.valueLiability}
                    onChange={field.onChangeLiability}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </FormControl>
    </Box>
  );
};

export default FormDeclareLayer;
