import { initializeApp } from "firebase/app";
import { GoogleAuthProvider, getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyATXSkhQJ78yxNInpmmGp3mQBHMMexUfAc",
  authDomain: "loginmedansoccers.firebaseapp.com",
  projectId: "loginmedansoccers",
  storageBucket: "loginmedansoccers.appspot.com",
  messagingSenderId: "946648979024",
  appId: "1:946648979024:web:259c9b1db48c087cb2e355",
  measurementId: "G-RFZ72417RE",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

const appImage = initializeApp(firebaseConfig);
export const imageDb = getStorage(appImage);
