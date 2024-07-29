import {
  Box,
  Flex,
  useDisclosure,
  Image,
} from "@chakra-ui/react";
import {
  MdBuild,
  MdHome,
} from "react-icons/md";
import { IoMdCalculator, IoMdLogOut, IoMdPaper } from "react-icons/io";
import NavItem from "./SidebarItems";
import { Link } from "react-router-dom";

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
      bg="white"
      border
      color="inherit"
      borderRightWidth="1px"
      w="60"
      {...props}
    >
      <Flex px="4" py="5" justify="center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/id/thumb/d/de/Logo_IndonesiaRe.svg/1200px-Logo_IndonesiaRe.svg.png"
          align="center"
          h="80px"
          alt="Logo"
          objectFit="cover"
        />
      </Flex>
      <Flex
        direction="column"
        as="nav"
        fontSize="md"
        color="gray.600"
        aria-label="Main Navigation"
      >
        <NavItem icon={MdHome}>Dashboard</NavItem>
        <NavItem icon={IoMdCalculator}>
          Calculator
        </NavItem>
        <NavItem icon={MdBuild}>
          <Link to="/admin/informasi-tersedia-setiap-saat">
            TBill
          </Link>
        </NavItem>
        <NavItem icon={IoMdPaper}>
        <Link to="/admin/informasi-tersedia-serta-merta">
            Claims
          </Link>
        </NavItem>
        <NavItem icon={IoMdLogOut}>Logout</NavItem>
      </Flex>
    </Box>
  );
};

export default SidebarContent;
