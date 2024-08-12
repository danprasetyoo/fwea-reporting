import React from 'react';
import { Grid, GridItem, Button, Flex, Box, Text } from '@chakra-ui/react'; // Import Text from @chakra-ui/react
import { Link } from 'react-router-dom';
import RiuReport from './Riu/RiuReport';
import SwissReport from './Swiss/SwissReport';

const TemplateReport: React.FC = () => {
  return (
    <Box p={5}>
      <Text fontSize="6xl" fontFamily="Arial, sans-serif" fontWeight="bold">
        Data Staging
      </Text>
      <Grid templateColumns="6fr 1fr" gap={4} p={4}>
        {/* Sub-Kolom 1 */}
        <GridItem>
          <RiuReport />
        </GridItem>

        {/* Sub-Kolom 2 */}
        <GridItem>
          <SwissReport />
        </GridItem>
      </Grid>
      {/* Flex Container for Button */}
      <Flex mt={5} justifyContent="flex-end">
        <Link to="/report">
          <Button
            mr={4}
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
        </Link>
      </Flex>
    </Box>
  );
};

export default TemplateReport;
