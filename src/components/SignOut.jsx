import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";
import { Button } from "@chakra-ui/react";

function logout() {
  signOut(auth);
}
const SignOut = () => {
  return (
    <Button
      colorScheme="teal"
      variant="outline"
      marginTop="5%"
      onClick={logout}
    >
      Logout
    </Button>
  );
};

export default SignOut;
