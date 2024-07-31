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

interface FormDeclareShareProps {
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

const FormDeclareShare: React.FC<FormDeclareShareProps> = ({ fields }) => {
  return (
    <Box p={5} fontFamily="calibri" borderWidth="1px" borderRadius="md">
      <FormControl>
        <Table variant="simple" size="sm">
          <Tbody>
            {fields.map((field, index) => (
              <Tr key={index}>
                <Td>
                  <FormLabel
                    htmlFor={`${field.label}-label`}
                    mb={0}
                    display="inline"
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
                  />
                </Td>
                <Td>
                  <Input
                    id={`${field.label}-ma1`}
                    type="number"
                    placeholder=""
                    value={field.valueMA1}
                    onChange={field.onChangeMA1}
                  />
                </Td>
                <Td>
                  <Input
                    id={`${field.label}-ma2`}
                    type="number"
                    placeholder=""
                    value={field.valueMA2}
                    onChange={field.onChangeMA2}
                  />
                </Td>
                <Td>
                  <Input
                    id={`${field.label}-liability`}
                    type="number"
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

export default FormDeclareShare;
