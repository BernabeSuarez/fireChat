import { auth } from "../firebase/firebaseConfig";
import { signOut } from "firebase/auth";

function logout() {
  signOut(auth);
}
const SignOut = () => {
  return <button onClick={logout}>Logout</button>;
};

export default SignOut;
