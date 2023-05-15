import { useState } from "react";
import { serverTimestamp, addDoc, collection } from "firebase/firestore";
import { db, auth } from "../firebase/firebaseConfig";

export default function SendMessages() {
  const [msg, setMsg] = useState("");

  function sendMessage(e) {
    e.preventDefault();
    const { uid, displayName } = auth.currentUser;
    try {
      addDoc(collection(db, "messages"), {
        text: msg,
        name: displayName,
        uid,
        fecha: serverTimestamp(),
      });
    } catch (e) {
      console.error("Error adding document: ", e);
    }
    setMsg("");
  }

  return (
    <form onSubmit={sendMessage}>
      <input
        type="text"
        placeholder="Escribe tu mensaje"
        value={msg}
        onChange={(e) => setMsg(e.target.value)}
      />
      <button type="submit">Enviar</button>
    </form>
  );
}
