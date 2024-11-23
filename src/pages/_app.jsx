import "../styles/globals.css";
import { ChakraProvider } from "@chakra-ui/react";
import { SidebarProvider } from "../components/contexts/SidebarContext";


export default function App({ Component, pageProps }) {
  return (
    <ChakraProvider>
      <SidebarProvider>
      <Component {...pageProps} />
    </SidebarProvider>
    </ChakraProvider>

)
}
