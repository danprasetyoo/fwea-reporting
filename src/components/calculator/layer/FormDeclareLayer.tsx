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

interface FormDeclareLayerProps {
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

const FormDeclareLayer: React.FC<FormDeclareLayerProps> = ({ fields }) => {
  return (
    <Box
      p={5}
      fontFamily="Arial, sans-serif"
      borderWidth="1px"
      borderRadius="md"
    >
      <FormControl>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr fontSize="lg">
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
                    htmlFor={`${field.label}-label`}
                    mb={0}
                    display="inline"
                    fontSize="14px"
                    fontFamily="Arial, sans-serif"
                  >
                    {field.label}
                  </FormLabel>
                </Td>
                <Td>
                  <Input
                    id={`${field.label}-pdma`}
                    type="number"
                    placeholder=""
                    value={field.valuePDMA}
                    onChange={field.onChangePDMA}
                    bg="gray.50"
                    fontSize="14px"
                    fontFamily="Arial, sans-serif"
                    borderColor="gray.300"
                    _focus={{
                      borderColor: 'blue.500',
                      boxShadow: '0 0 0 1px blue.500',
                    }}
                  />
                </Td>
                <Td>
                  <Input
                    id={`${field.label}-ma1`}
                    type="number"
                    placeholder=""
                    value={field.valueMA1}
                    onChange={field.onChangeMA1}
                    bg="gray.50"
                    fontSize="14px"
                    fontFamily="Arial, sans-serif"
                    borderColor="gray.300"
                    _focus={{
                      borderColor: 'blue.500',
                      boxShadow: '0 0 0 1px blue.500',
                    }}
                  />
                </Td>
                <Td>
                  <Input
                    id={`${field.label}-ma2`}
                    type="number"
                    placeholder=""
                    value={field.valueMA2}
                    onChange={field.onChangeMA2}
                    bg="gray.50"
                    fontSize="14px"
                    fontFamily="Arial, sans-serif"
                    borderColor="gray.300"
                    _focus={{
                      borderColor: 'blue.500',
                      boxShadow: '0 0 0 1px blue.500',
                    }}
                  />
                </Td>
                <Td>
                  <Input
                    id={`${field.label}-liability`}
                    type="number"
                    placeholder=""
                    value={field.valueLiability}
                    onChange={field.onChangeLiability}
                    bg="gray.50"
                    fontSize="14px"
                    fontFamily="Arial, sans-serif"
                    borderColor="gray.300"
                    _focus={{
                      borderColor: 'blue.500',
                      boxShadow: '0 0 0 1px blue.500',
                    }}
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
