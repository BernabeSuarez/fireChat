import { auth } from "../firebase/firebaseConfig";
import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";

const signInGoogle = () => {
  signInWithPopup(auth, new GoogleAuthProvider());
};

const SignIn = () => {
  return (
    <div>
      <button onClick={signInGoogle}>Sign In with Google</button>
    </div>
  );
};

export default SignIn;
