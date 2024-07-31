import React from 'react';
import FormInputHeader from './header/FormInputHeader';
import FormInputTreaty from './treaty/FormInputTreaty';
import FormInputLayer from './layer/FormInputLayer';
import FormInputAdjustment from './adjustmentPremium/FormInputAdjustment';
import FormInputShare from './share/FormInputShare';
import { Button, Flex } from '@chakra-ui/react';

const Calculator = () => {
  return (
    <Flex direction="column" p={5}>
      <FormInputHeader />
      <FormInputTreaty />
      <FormInputLayer />
      <FormInputAdjustment />
      <FormInputShare />
      <Flex mt={5} pr={5} justifyContent="flex-end">
        <Button
          color="white"
          bg="blue.400"
          _hover={{
            bg: 'blue.500',
          }}
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default Calculator;
