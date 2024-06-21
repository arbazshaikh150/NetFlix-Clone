import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyCUB6gRJpSE8vTtZjKPr3Czr4qxGrgJV1o",
  authDomain: "netflix-clone-e140f.firebaseapp.com",
  projectId: "netflix-clone-e140f",
  storageBucket: "netflix-clone-e140f.appspot.com",
  messagingSenderId: "856549029578",
  appId: "1:856549029578:web:6dac010eab98d9ca572633",
  measurementId: "G-YZ8YJPT86X"
};

const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);