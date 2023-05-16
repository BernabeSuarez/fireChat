import { useState, useEffect } from "react";
import SignOut from "./SignOut";
import { db } from "../firebase/firebaseConfig";
import { collection, query, orderBy, onSnapshot } from "firebase/firestore";
import SendMessages from "./SendMessages";
import { auth } from "../firebase/firebaseConfig";
import "./chatStyle.css";

const Chat = () => {
  const [message, setMessage] = useState([]);

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

  return (
    <div>
      <h3>Chat App</h3>

      {message.map((item) => (
        <div
          key={item.id}
          className={
            item.content.uid === auth.currentUser.uid
              ? "my-messages"
              : "messages"
          }
        >
          <p>{item.content.text}</p>
          <img src={item.content.image} alt="profile" width={55} />
        </div>
      ))}

      <SendMessages />
      <SignOut />
    </div>
  );
};

export default Chat;
