import React from 'react';
import FormInputHeader from './header/FormInputHeader';
import FormInputTreaty from './treaty/FormInputTreaty';
import FormInputLayer from './layer/FormInputLayer';
import FormInputAdjustment from './adjustmentPremium/FormInputAdjustment';
import FormInputShare from './share/FormInputShare';
import { Button, Flex } from '@chakra-ui/react';

const Calculator = () => {
  return (
    <Flex direction="column">
      <FormInputHeader />
      <FormInputTreaty />
      <FormInputLayer />
      <FormInputAdjustment />
      <FormInputShare />
      <Flex mt={5} pr={5} justifyContent="flex-end">
        <Button
          color="white"
          bg="blue.300"
          fontFamily="Arial, sans-serif"
          fontSize="16px"
          borderRadius="md"
          boxShadow="md"
          _hover={{
            bg: 'blue.500',
            boxShadow: 'lg',
          }}
          _active={{
            bg: 'blue.700',
            boxShadow: 'none',
          }}
          _focus={{
            boxShadow: 'outline',
          }}
          transition="all 0.2s ease-in-out"
        >
          Submit
        </Button>
      </Flex>
    </Flex>
  );
};

export default Calculator;
