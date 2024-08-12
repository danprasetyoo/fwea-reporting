import React from 'react';
import { Box, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';

interface FormDeclareHeaderProps {
  label: string;
  type?: 'text' | 'number' | 'date';
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  isRequired?: boolean; // Add isRequired to the props type
}

const FormDeclareHeader: React.FC<FormDeclareHeaderProps> = ({
  label,
  type = 'text',
  placeholder,
  value,
  onChange,
  isRequired = false, // Default to false if not provided
}) => {
  return (
    <Box>
      <FormControl mb={4} isRequired={isRequired}>
        <Flex align="center">
          <FormLabel
            htmlFor={label}
            mb={0}
            mr={4}
            minWidth="300px"
            whiteSpace="nowrap"
            overflow="hidden"
            textOverflow="ellipsis"
            fontSize="16px"
            fontFamily="Arial, sans-serif"
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
            backgroundColor="gray.50"
            fontSize="16px"
            fontFamily="Arial, sans-serif"
          />
        </Flex>
      </FormControl>
    </Box>
  );
};

export default FormDeclareHeader;
