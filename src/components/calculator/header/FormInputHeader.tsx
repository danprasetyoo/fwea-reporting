import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
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
        Input
      </Text>
      <FormDeclare
        label="Statement date as at:"
        type="date"
        value={statementDate}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setStatementDate(e.target.value)
        }
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
    </Box>
  );
};

export default FormInputHeader;
