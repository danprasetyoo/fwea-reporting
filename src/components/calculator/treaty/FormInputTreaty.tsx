import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import FormDeclare from './FormDeclareTreaty';

const FormInputTreaty: React.FC = () => {
  const [exchangeRateCY, setExchangeRateCY] = useState<string>('');
  const [exchangeRatePY, setExchangeRatePY] = useState<string>('');
  const [reinsuranceMarginCY, setReinsuranceMarginCY] = useState<string>('');
  const [reinsuranceMarginPY, setReinsuranceMarginPY] = useState<string>('');
  const [brokerageCY, setBrokerageCY] = useState<string>('');
  const [brokeragePY, setBrokeragePY] = useState<string>('');
  const [interestRateCY, setInterestRateCY] = useState<string>('');
  const [interestRatePY, setInterestRatePY] = useState<string>('');
  const [lapCY, setLapCY] = useState<string>('');
  const [lapPY, setLapPY] = useState<string>('');
  const [maintenanceCreditCY, setMaintenanceCreditCY] = useState<string>('');
  const [maintenanceCreditPY, setMaintenanceCreditPY] = useState<string>('');

  return (
    <Box p={5} fontFamily="calibri">
      <FormDeclare
        label="Exchange Rate"
        type="number"
        valueCY={exchangeRateCY}
        valuePY={exchangeRatePY}
        onChangeCY={(e) => setExchangeRateCY(e.target.value)}
        onChangePY={(e) => setExchangeRatePY(e.target.value)}
      />
      <FormDeclare
        label="Reinsurance Margin"
        type="number"
        valueCY={reinsuranceMarginCY}
        valuePY={reinsuranceMarginPY}
        onChangeCY={(e) => setReinsuranceMarginCY(e.target.value)}
        onChangePY={(e) => setReinsuranceMarginPY(e.target.value)}
      />
      <FormDeclare
        label="Brokerage"
        type="number"
        valueCY={brokerageCY}
        valuePY={brokeragePY}
        onChangeCY={(e) => setBrokerageCY(e.target.value)}
        onChangePY={(e) => setBrokeragePY(e.target.value)}
      />
      <FormDeclare
        label="Interest Rate"
        type="number"
        valueCY={interestRateCY}
        valuePY={interestRatePY}
        onChangeCY={(e) => setInterestRateCY(e.target.value)}
        onChangePY={(e) => setInterestRatePY(e.target.value)}
      />
      <FormDeclare
        label="LAP"
        type="number"
        valueCY={lapCY}
        valuePY={lapPY}
        onChangeCY={(e) => setLapCY(e.target.value)}
        onChangePY={(e) => setLapPY(e.target.value)}
      />
      <FormDeclare
        label="Maintenance Credit"
        type="number"
        valueCY={maintenanceCreditCY}
        valuePY={maintenanceCreditPY}
        onChangeCY={(e) => setMaintenanceCreditCY(e.target.value)}
        onChangePY={(e) => setMaintenanceCreditPY(e.target.value)}
      />
    </Box>
  );
};

export default FormInputTreaty;
