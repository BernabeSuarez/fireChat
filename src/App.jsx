import SignIn from "./components/SignIn";
import Chat from "./components/Chat";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "./firebase/firebaseConfig";
import { extendTheme, ChakraProvider } from "@chakra-ui/react";
import { Flex } from "@chakra-ui/react";

const colors = {
  brand: {
    900: "#242424",
    800: "#153e75",
    700: "#2a69ac",
  },
};

const theme = extendTheme({ colors });

function App() {
  const [user] = useAuthState(auth);
  console.log(user);

  return (
    <ChakraProvider theme={theme}>
      <Flex bg="gray.800" h="100vh" align="center" justify="center">
        {user ? <Chat /> : <SignIn />}
      </Flex>
    </ChakraProvider>
  );
}

export default App;
