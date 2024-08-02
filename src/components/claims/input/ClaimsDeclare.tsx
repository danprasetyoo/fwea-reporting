import React from 'react';
import { Box, Flex, FormControl, FormLabel, Input } from '@chakra-ui/react';

interface ClaimsDeclareProps {
  label: string;
  type?: 'text' | 'number' | 'date';
  placeholder?: string;
  value: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

const ClaimDeclare: React.FC<ClaimsDeclareProps> = ({
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
            backgroundColor="gray.50" // Set background color to gray.50
            fontSize="16px" // Set font size to 18px
            fontFamily="Arial, sans-serif" // Set font family to Arial
          />
        </Flex>
      </FormControl>
    </Box>
  );
};

export default ClaimDeclare;
