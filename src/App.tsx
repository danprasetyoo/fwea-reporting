import { ChakraProvider, theme } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import SidebarContent from "./components/sidebar/SidebarContent";
import AppRoutes from "./components/AppRoutes";

export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <SidebarContent />
      <AppRoutes />
    </BrowserRouter>
  </ChakraProvider>
);
