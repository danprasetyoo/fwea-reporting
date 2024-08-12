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

interface FormDeclareAdjustmentProps {
  fields: {
    label: string;
    valueA: string;
    valueB: string;
    valueC: string;
    valueD: string;
    onChangeA: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeB: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeC: (event: React.ChangeEvent<HTMLInputElement>) => void;
    onChangeD: (event: React.ChangeEvent<HTMLInputElement>) => void;
  }[];
}

const FormDeclareAdjustment: React.FC<FormDeclareAdjustmentProps> = ({
  fields,
}) => {
  return (
    <Box
      p={5}
      fontFamily="Arial, sans-serif"
      borderWidth="1px"
      borderRadius="md"
    >
      <FormControl>
        <Table variant="simple" size="sm">
          {/* <Thead>
            <Tr fontSize="lg" fontFamily="Arial, sans-serif">
              <Th></Th>
              <Th textAlign="center">Column A</Th>
              <Th textAlign="center">Column B</Th>
              <Th textAlign="center">Column C</Th>
              <Th textAlign="center">Column D</Th>
            </Tr>
          </Thead> */}
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
                    id={`${field.label}-a`}
                    type="number"
                    placeholder=""
                    value={field.valueA}
                    onChange={field.onChangeA}
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
                    id={`${field.label}-b`}
                    type="number"
                    placeholder=""
                    value={field.valueB}
                    onChange={field.onChangeB}
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
                    id={`${field.label}-c`}
                    type="number"
                    placeholder=""
                    value={field.valueC}
                    onChange={field.onChangeC}
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
                    id={`${field.label}-d`}
                    type="number"
                    placeholder=""
                    value={field.valueD}
                    onChange={field.onChangeD}
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

export default FormDeclareAdjustment;
