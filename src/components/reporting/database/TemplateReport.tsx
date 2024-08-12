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
    </Box>
  );
};

export default TemplateReport;
