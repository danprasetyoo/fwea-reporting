import React, { useState } from 'react';
import { Box, Text, Flex, Button } from '@chakra-ui/react';
// import { Link } from 'react-router-dom';
import FormDeclare from './FormDeclareHeader';

const FormInputHeader: React.FC = () => {
  const [statementDate, setStatementDate] = useState('');
  const [openingFund, setOpeningFund] = useState('');
  const [statementPeriod, setStatementPeriod] = useState('');
  const [treatyYear, setTreatyYear] = useState('');

  // Function to handle year validation
  const handleYearChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Validate that the input is a 4-digit year
    if (/^\d{0,4}$/.test(value)) {
      setTreatyYear(value);
    }
  };

  return (
    <Box p={5}>
      <Text fontSize="6xl" fontFamily="Arial, sans-serif" fontWeight="bold">
        Calculator
      </Text>
      <FormDeclare
        label="Statement date as at:"
        type="date"
        value={statementDate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setStatementDate(e.target.value)
        }
        isRequired
      />
      <FormDeclare
        label="Opening fund:"
        type="number"
        value={openingFund}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setOpeningFund(e.target.value)
        }
      />
      <FormDeclare
        label="Statement period start:"
        type="date"
        value={statementPeriod}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setStatementPeriod(e.target.value)
        }
      />
      <FormDeclare
        label="Treaty Year:"
        type="number"
        value={treatyYear}
        onChange={handleYearChange}
      />
      {/* <Flex mt={5} pr={5} justifyContent="start">
        <Link to="/report">
          <Button
            color="white"
            bg="green.400"
            fontFamily="Arial, sans-serif"
            fontSize="16px"
            borderRadius="md"
            boxShadow="md"
            _hover={{
              bg: 'green.500',
              boxShadow: 'lg',
            }}
            _active={{
              bg: 'green.700',
              boxShadow: 'none',
            }}
            _focus={{
              boxShadow: 'outline',
            }}
            transition="all 0.2s ease-in-out"
          >
            Load
          </Button>
        </Link>
      </Flex> */}
    </Box>
  );
};

export default FormInputHeader;
