import SignOut from "./SignOut";
// import { useAuthState } from "react-firebase-hooks/auth";
// import { auth } from "../firebase/firebaseConfig";

const Chat = () => {
  //const [user] = useAuthState(auth);

  return (
    <div>
      <h3>Chat App</h3>
      <SignOut />
    </div>
  );
};

export default Chat;
