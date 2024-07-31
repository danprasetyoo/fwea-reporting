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
    valueCY: string;
    valuePY: string;
    onChangeCY: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangePY: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }[];
}

const FormDeclareTreaty: React.FC<FormDeclareTreatyProps> = ({ fields }) => {
  return (
    <Box
      p={5}
      fontFamily="Arial, sans-serif"
      borderWidth="1px"
      borderRadius="md"
      fontSize="16px"
      fontWeight="semibold"
    >
      <FormControl>
        <Table variant="simple" size="sm">
          <Thead>
            <Tr>
              <Th>Treaty Details</Th>
              <Th textAlign="center">Current Year</Th>
              <Th textAlign="center">Prior Year</Th>
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
                    fontSize="14px"
                    fontFamily="Arial, sans-serif"
                  >
                    {field.label}
                  </FormLabel>
                </Td>
                <Td>
                  <Input
                    id={`${field.label}-cy`}
                    type="number"
                    placeholder=""
                    value={field.valueCY}
                    onChange={field.onChangeCY}
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
                    id={`${field.label}-py`}
                    type="number"
                    placeholder=""
                    value={field.valuePY}
                    onChange={field.onChangePY}
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

export default FormDeclareTreaty;
