// FormDeclare.tsx
import React from 'react';
import { Box, FormControl, FormLabel, Input, Flex } from '@chakra-ui/react';

interface FormDeclareTreatyProps {
  label: string;
  type?: 'text' | 'number' | 'date';
  placeholder?: string;
  valueCY: string;
  valuePY: string;
  onChangeCY: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onChangePY: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormDeclareTreaty: React.FC<FormDeclareTreatyProps> = ({
  label,
  type = 'text',
  placeholder,
  valueCY,
  valuePY,
  onChangeCY,
  onChangePY,
}) => {
  return (
    <Box mb={4}>
      <FormControl>
        <Flex direction="row" align="center">
          <FormLabel
            htmlFor={`${label}-cy`}
            mb={0}
            mr={4}
            minWidth="200px"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
          >
            {label}
          </FormLabel>
          <Box flex="1">
            <Flex direction="row" align="center" mb={2}>
              <FormLabel htmlFor={`${label}-cy`} mb={0} mr={2} width="auto">
                CY:
              </FormLabel>
              <Input
                id={`${label}-cy`}
                type={type}
                placeholder={placeholder}
                value={valueCY}
                onChange={onChangeCY}
                mb={2}
                width="100%"
              />
            </Flex>
            <Flex direction="row" align="center">
              <FormLabel htmlFor={`${label}-py`} mb={0} mr={2} width="auto">
                PY:
              </FormLabel>
              <Input
                id={`${label}-py`}
                type={type}
                placeholder={placeholder}
                value={valuePY}
                onChange={onChangePY}
                width="100%"
              />
            </Flex>
          </Box>
        </Flex>
      </FormControl>
    </Box>
  );
};

export default FormDeclareTreaty;
