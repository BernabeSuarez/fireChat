import { useState, useEffect } from "react";
import SignOut from "./SignOut";
import { db } from "../firebase/firebaseConfig";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import SendMessages from "./SendMessages";
import { auth } from "../firebase/firebaseConfig";
import "./chatStyle.css";

const Chat = () => {
  const [message, setMessage] = useState([]);

  let msgStyle = "messages";
  if (auth.currentUser) {
    const user = auth.currentUser;
    const otherUser = message.uid;
    msgStyle = user === otherUser ? "my-messages" : "messages";
  }

  useEffect(() => {
    const newQuery = query(collection(db, "messages"), orderBy("fecha"));
    const unsuscribe = onSnapshot(newQuery, (querysnapshot) => {
      let currentMessage = [];
      querysnapshot.forEach((doc) => {
        currentMessage.push({ content: doc.data(), id: doc.id });
      });
      setMessage(currentMessage);
    });
    return unsuscribe;
  }, []);

  console.log(message);

  return (
    <div>
      <h3>Chat App</h3>

      {message.map((item) => (
        <div key={item.id} className={msgStyle}>
          <p>{item.content.text}</p>
        </div>
      ))}

      <SendMessages />
      <SignOut />
    </div>
  );
};

export default Chat;
