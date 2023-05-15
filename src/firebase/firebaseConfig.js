import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyD7isCxUoNSgnYSEQSvB4AUqF9dyrFz50Q",
    authDomain: "fir-chat-130d8.firebaseapp.com",
    projectId: "fir-chat-130d8",
    storageBucket: "fir-chat-130d8.appspot.com",
    messagingSenderId: "378222286322",
    appId: "1:378222286322:web:0d13c08fe36b9ac528876b"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app)