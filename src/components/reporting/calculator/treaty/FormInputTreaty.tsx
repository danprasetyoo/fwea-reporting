import React, { useState } from 'react';
import { Box } from '@chakra-ui/react';
import FormDeclareTreaty from './FormDeclareTreaty';

const FormInput: React.FC = () => {
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

  const fields = [
    {
      label: 'Exchange Rate',
      valueCY: exchangeRateCY,
      valuePY: exchangeRatePY,
      onChangeCY: (e: React.ChangeEvent<HTMLInputElement>) =>
        setExchangeRateCY(e.target.value),
      onChangePY: (e: React.ChangeEvent<HTMLInputElement>) =>
        setExchangeRatePY(e.target.value),
      type: 'numeric',
    },
    {
      label: 'Reinsurance Margin',
      valueCY: reinsuranceMarginCY,
      valuePY: reinsuranceMarginPY,
      onChangeCY: (e: React.ChangeEvent<HTMLInputElement>) =>
        setReinsuranceMarginCY(e.target.value),
      onChangePY: (e: React.ChangeEvent<HTMLInputElement>) =>
        setReinsuranceMarginPY(e.target.value),
      type: 'percentage',
    },
    {
      label: 'Brokerage',
      valueCY: brokerageCY,
      valuePY: brokeragePY,
      onChangeCY: (e: React.ChangeEvent<HTMLInputElement>) =>
        setBrokerageCY(e.target.value),
      onChangePY: (e: React.ChangeEvent<HTMLInputElement>) =>
        setBrokeragePY(e.target.value),
      type: 'percentage',
    },
    {
      label: 'Interest Rate',
      valueCY: interestRateCY,
      valuePY: interestRatePY,
      onChangeCY: (e: React.ChangeEvent<HTMLInputElement>) =>
        setInterestRateCY(e.target.value),
      onChangePY: (e: React.ChangeEvent<HTMLInputElement>) =>
        setInterestRatePY(e.target.value),
      type: 'percentage',
    },
    {
      label: 'LAP',
      valueCY: lapCY,
      valuePY: lapPY,
      onChangeCY: (e: React.ChangeEvent<HTMLInputElement>) =>
        setLapCY(e.target.value),
      onChangePY: (e: React.ChangeEvent<HTMLInputElement>) =>
        setLapPY(e.target.value),
      type: 'percentage',
    },
    {
      label: 'Maintenance Credit',
      valueCY: maintenanceCreditCY,
      valuePY: maintenanceCreditPY,
      onChangeCY: (e: React.ChangeEvent<HTMLInputElement>) =>
        setMaintenanceCreditCY(e.target.value),
      onChangePY: (e: React.ChangeEvent<HTMLInputElement>) =>
        setMaintenanceCreditPY(e.target.value),
      type: 'percentage',
    },
  ];

  return (
    <Box p={5}>
      <FormDeclareTreaty fields={fields} />
    </Box>
  );
};

export default FormInput;
