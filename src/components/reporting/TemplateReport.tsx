import React from 'react';
import { Grid, GridItem, Box, Text } from '@chakra-ui/react';
import RiuReport from './RiuReport';
import SwissReport from './SwissReport';

const TemplateReport: React.FC = () => {
  return (
    <Grid templateColumns="3fr 1fr" gap={4} p={4}>
      {/* Sub-Kolom 1 */}
      <GridItem>
        <RiuReport />
      </GridItem>

      {/* Sub-Kolom 2 */}
      <GridItem>
        <SwissReport />
      </GridItem>
    </Grid>
  );
};

export default TemplateReport;
