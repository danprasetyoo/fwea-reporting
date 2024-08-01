import React from 'react';
import {
  Box,
  Flex,
  Image,
  Divider,
  useBreakpointValue,
  Link as ChakraLink,
} from '@chakra-ui/react';
import { MdBuild, MdHome, MdMenu } from 'react-icons/md';
import { IoMdCalculator, IoMdLogOut, IoMdPaper } from 'react-icons/io';
import NavItem from './SidebarItems';
import { Link } from 'react-router-dom';

const SidebarContent: React.FC = (props) => {
  return (
    <Box
      as="nav"
      pos="fixed"
      top="0"
      left="0"
      zIndex="sticky"
      h="full"
      pb="10"
      overflowX="hidden"
      overflowY="auto"
      bg="gray.50"
      borderRightWidth="2px"
      borderRightColor="gray.200"
      w={{ base: 'full', md: '60' }}
      boxShadow="md"
      borderRadius="md"
      {...props}
    >
      <Flex
        px="4"
        py="5"
        justify="center"
        borderBottomWidth="1px"
        borderBottomColor="gray.200"
      >
        <Image
          src="https://upload.wikimedia.org/wikipedia/id/thumb/d/de/Logo_IndonesiaRe.svg/1200px-Logo_IndonesiaRe.svg.png"
          alt="Logo"
          boxSize="130px"
          objectFit="contain"
        />
      </Flex>

      <Flex
        direction="column"
        as="nav"
        fontSize="md"
        color="black"
        aria-label="Main Navigation"
        my="4"
      >
        <Link to="/dashboard">
          <NavItem icon={MdHome}>Dashboard</NavItem>
        </Link>
        <Link to="/calculator">
          <NavItem icon={IoMdCalculator}>Calculator</NavItem>
        </Link>
        <Link to="/tbill">
          <NavItem icon={MdBuild}>TBill</NavItem>
        </Link>
        <Link to="/input">
          <NavItem icon={IoMdPaper}>Claims</NavItem>
        </Link>
        <Link to="/logout">
          <NavItem icon={IoMdLogOut}>Logout</NavItem>
        </Link>
      </Flex>
    </Box>
  );
};

export default SidebarContent;
