
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCYZi8i47WcuPkbrgjvtI6kiTH8dAFNnHQ",
  authDomain: "react-employee-da8cc.firebaseapp.com",
  projectId: "react-employee-da8cc",
  storageBucket: "react-employee-da8cc.appspot.com",
  messagingSenderId: "1008095897133",
  appId: "1:1008095897133:web:ce090d84d99da7118e3aa4",
  measurementId: "G-PFVNBRWB7B"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
