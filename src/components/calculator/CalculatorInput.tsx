import React from 'react';
import FormInputHeader from './header/FormInputHeader';
import FormInputTreaty from './treaty/FormInputTreaty';
import FormInputLayer from './layer/FormInputLayer';
import FormInputAdjustment from './adjustmentPremium/FormInputAdjustment';

const Calculator = () => {
  return (
    <>
      <FormInputHeader />
      <FormInputTreaty />
      <FormInputLayer />
      <FormInputAdjustment />
    </>
  );
};

export default Calculator;
