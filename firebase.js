import { initializeApp } from "firebase/app";
import { getFirestore } from "@firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAyVZ_gdjmyCtl9g1juHM9hMP7z9srn-YU",
  authDomain: "mo-tech-5db63.firebaseapp.com",
  projectId: "mo-tech-5db63",
  storageBucket: "mo-tech-5db63.appspot.com",
  messagingSenderId: "787072011023",
  appId: "1:787072011023:web:be00317f6ab2e8027a8c7a",
  measurementId: "G-GCYB3EZ95F",
};
const app = initializeApp(firebaseConfig);
export const firestore = getFirestore(app);
