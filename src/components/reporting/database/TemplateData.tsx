import React from 'react';
import { Grid, GridItem, Box, Text } from '@chakra-ui/react'; // Import Text from @chakra-ui/react
import RiuDatabase from './Riu/RiuDatabase';
import SwissDatabase from './Swiss/SwissDatabase';

const TemplateData: React.FC = () => {
  return (
    <Box p={5}>
      <Text fontSize="6xl" fontFamily="Arial, sans-serif" fontWeight="bold">
        Database
      </Text>
      <Grid templateColumns="6fr 1fr" gap={4} p={4}>
        <GridItem>
          <RiuDatabase />
        </GridItem>
        <GridItem>
          <SwissDatabase />
        </GridItem>
      </Grid>
    </Box>
  );
};

export default TemplateData;
