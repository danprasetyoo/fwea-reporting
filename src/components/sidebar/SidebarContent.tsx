import { Box, Flex, Image } from '@chakra-ui/react';
import { MdBuild, MdHome } from 'react-icons/md';
import { IoMdCalculator, IoMdLogOut, IoMdPaper } from 'react-icons/io';
import NavItem from './SidebarItems';
import { Link } from 'react-router-dom';

const SidebarContent = (props: any) => {
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
      border
      color="inherit"
      borderRightWidth="2px"
      w="60"
      boxShadow="xl"
      {...props}
    >
      <Flex px="4" py="5" justify="center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/id/thumb/d/de/Logo_IndonesiaRe.svg/1200px-Logo_IndonesiaRe.svg.png"
          align="center"
          h="45px"
          alt="Logo"
          objectFit="cover"
        />
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="md"
        color="black"
        aria-label="Main Navigation"
      >
        <NavItem icon={MdHome}>Dashboard</NavItem>
        <NavItem icon={IoMdCalculator}>Calculator</NavItem>
        <NavItem icon={MdBuild}>
          <Link to="/input">TBill</Link>
        </NavItem>
        <NavItem icon={IoMdPaper}>
          <Link to="/input">Claims</Link>
        </NavItem>
        <NavItem icon={IoMdLogOut}>Logout</NavItem>
      </Flex>
    </Box>
  );
};

export default SidebarContent;
