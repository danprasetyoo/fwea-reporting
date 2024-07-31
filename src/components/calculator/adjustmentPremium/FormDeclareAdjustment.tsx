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
                    id={`${field.label}-a`}
                    type="number"
                    placeholder=""
                    value={field.valueA}
                    onChange={field.onChangeA}
                  />
                </Td>
                <Td>
                  <Input
                    id={`${field.label}-b`}
                    type="number"
                    placeholder=""
                    value={field.valueB}
                    onChange={field.onChangeB}
                  />
                </Td>
                <Td>
                  <Input
                    id={`${field.label}-c`}
                    type="number"
                    placeholder=""
                    value={field.valueC}
                    onChange={field.onChangeC}
                  />
                </Td>
                <Td>
                  <Input
                    id={`${field.label}-d`}
                    type="number"
                    placeholder=""
                    value={field.valueD}
                    onChange={field.onChangeD}
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
