import React from 'react';
import FormInputHeader from './header/FormInputHeader';
import FormInputTreaty from './treaty/FormInputTreaty';
import FormInputLayer from './layer/FormInputLayer';

const Calculator = () => {
  return (
    <>
      <FormInputHeader />
      <FormInputTreaty />
      <FormInputLayer />
    </>
  );
};

export default Calculator;
