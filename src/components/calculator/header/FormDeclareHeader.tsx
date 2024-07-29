import React from 'react';
import { Box, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';

interface FormDeclareHeaderProps {
  label: string;
  type?: 'text' | 'number' | 'date';
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const FormDeclareHeader: React.FC<FormDeclareHeaderProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
}) => {
  return (
    <Box>
      <FormControl mb={4}>
        <Flex align="center">
          <FormLabel
            htmlFor={label}
            mb={0}
            mr={4}
            minWidth="300px"
            whiteSpace="nowrap" // Prevent text wrapping
            overflow="hidden" // Hide overflowed text
            textOverflow="ellipsis" // Add ellipsis for overflowed text
          >
            {label}
          </FormLabel>
          <Input
            id={label}
            type={type}
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            minWidth="300px"
            maxWidth="600px"
          />
        </Flex>
      </FormControl>
    </Box>
  );
};

export default FormDeclareHeader;
