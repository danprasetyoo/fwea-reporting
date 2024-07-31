import React, { useState } from 'react';
import { Box, Text } from '@chakra-ui/react';
import FormDeclareAdjusment from './FormDeclareAdjustment'; // Ensure this is the correct import

const FormInputAdjustment: React.FC = () => {
  const [adjustmentUsdA, setAdjustmentUsdA] = useState('');
  const [adjustmentUsdB, setAdjustmentUsdB] = useState('');
  const [adjustmentUsdC, setAdjustmentUsdC] = useState('');
  const [adjustmentUsdD, setAdjustmentUsdD] = useState('');

  const [adjustmentIdrA, setAdjustmentIdrA] = useState('');
  const [adjustmentIdrB, setAdjustmentIdrB] = useState('');
  const [adjustmentIdrC, setAdjustmentIdrC] = useState('');
  const [adjustmentIdrD, setAdjustmentIdrD] = useState('');

  const [shareA, setShareA] = useState('');
  const [shareB, setShareB] = useState('');
  const [shareC, setShareC] = useState('');
  const [shareD, setShareD] = useState('');

  const fields = [
    {
      label: 'Adjustment Premium - USD',
      valueA: adjustmentUsdA,
      valueB: adjustmentUsdB,
      valueC: adjustmentUsdC,
      valueD: adjustmentUsdD,
      onChangeA: (e: React.ChangeEvent<HTMLInputElement>) =>
        setAdjustmentUsdA(e.target.value),
      onChangeB: (e: React.ChangeEvent<HTMLInputElement>) =>
        setAdjustmentUsdB(e.target.value),
      onChangeC: (e: React.ChangeEvent<HTMLInputElement>) =>
        setAdjustmentUsdC(e.target.value),
      onChangeD: (e: React.ChangeEvent<HTMLInputElement>) =>
        setAdjustmentUsdD(e.target.value),
    },
    {
      label: 'Adjustment Premium - IDR',
      valueA: adjustmentIdrA,
      valueB: adjustmentIdrB,
      valueC: adjustmentIdrC,
      valueD: adjustmentIdrD,
      onChangeA: (e: React.ChangeEvent<HTMLInputElement>) =>
        setAdjustmentIdrA(e.target.value),
      onChangeB: (e: React.ChangeEvent<HTMLInputElement>) =>
        setAdjustmentIdrB(e.target.value),
      onChangeC: (e: React.ChangeEvent<HTMLInputElement>) =>
        setAdjustmentIdrC(e.target.value),
      onChangeD: (e: React.ChangeEvent<HTMLInputElement>) =>
        setAdjustmentIdrD(e.target.value),
    },
    {
      label: 'Share',
      valueA: shareA,
      valueB: shareB,
      valueC: shareC,
      valueD: shareD,
      onChangeA: (e: React.ChangeEvent<HTMLInputElement>) =>
        setShareA(e.target.value),
      onChangeB: (e: React.ChangeEvent<HTMLInputElement>) =>
        setShareB(e.target.value),
      onChangeC: (e: React.ChangeEvent<HTMLInputElement>) =>
        setShareC(e.target.value),
      onChangeD: (e: React.ChangeEvent<HTMLInputElement>) =>
        setShareD(e.target.value),
    },
  ];

  return (
    <Box p={5}>
      <Text as="b">Prior Year Adjustment Premium</Text>
      <FormDeclareAdjusment fields={fields} />
    </Box>
  );
};

export default FormInputAdjustment;
