import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import FormDeclareLayer from './FormDeclareLayer'; // Ensure this is the correct import

const FormInputLayer: React.FC = () => {
  const [usdPDMA, setUsdPDMA] = useState('');
  const [usdMA1, setUsdMA1] = useState('');
  const [usdMA2, setUsdMA2] = useState('');
  const [usdLiability, setUsdLiability] = useState('');

  const [idrPDMA, setIdrPDMA] = useState('');
  const [idrMA1, setIdrMA1] = useState('');
  const [idrMA2, setIdrMA2] = useState('');
  const [idrLiability, setIdrLiability] = useState('');

  const [sharePDMA, setSharePDMA] = useState('');
  const [shareMA1, setShareMA1] = useState('');
  const [shareMA2, setShareMA2] = useState('');
  const [shareLiability, setShareLiability] = useState('');

  const fields = [
    {
      label: 'MDP - USD',
      valuePDMA: usdPDMA,
      valueMA1: usdMA1,
      valueMA2: usdMA2,
      valueLiability: usdLiability,
      onChangePDMA: (e: React.ChangeEvent<HTMLInputElement>) =>
        setUsdPDMA(e.target.value),
      onChangeMA1: (e: React.ChangeEvent<HTMLInputElement>) =>
        setUsdMA1(e.target.value),
      onChangeMA2: (e: React.ChangeEvent<HTMLInputElement>) =>
        setUsdMA2(e.target.value),
      onChangeLiability: (e: React.ChangeEvent<HTMLInputElement>) =>
        setUsdLiability(e.target.value),
      type: 'number',
    },
    {
      label: 'MDP - IDR',
      valuePDMA: idrPDMA,
      valueMA1: idrMA1,
      valueMA2: idrMA2,
      valueLiability: idrLiability,
      onChangePDMA: (e: React.ChangeEvent<HTMLInputElement>) =>
        setIdrPDMA(e.target.value),
      onChangeMA1: (e: React.ChangeEvent<HTMLInputElement>) =>
        setIdrMA1(e.target.value),
      onChangeMA2: (e: React.ChangeEvent<HTMLInputElement>) =>
        setIdrMA2(e.target.value),
      onChangeLiability: (e: React.ChangeEvent<HTMLInputElement>) =>
        setIdrLiability(e.target.value),
      type: 'number', // Use 'number' if percentage input should be numeric
    },
    {
      label: 'Share',
      valuePDMA: sharePDMA,
      valueMA1: shareMA1,
      valueMA2: shareMA2,
      valueLiability: shareLiability,
      onChangePDMA: (e: React.ChangeEvent<HTMLInputElement>) =>
        setSharePDMA(e.target.value),
      onChangeMA1: (e: React.ChangeEvent<HTMLInputElement>) =>
        setShareMA1(e.target.value),
      onChangeMA2: (e: React.ChangeEvent<HTMLInputElement>) =>
        setShareMA2(e.target.value),
      onChangeLiability: (e: React.ChangeEvent<HTMLInputElement>) =>
        setShareLiability(e.target.value),
      type: 'number',
    },
  ];

  return (
    <Box p={5}>
      <Text as="b">Layer Details</Text>
      <FormDeclareLayer fields={fields} />
    </Box>
  );
};

export default FormInputLayer;
