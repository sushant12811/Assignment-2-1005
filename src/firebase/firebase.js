import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

//firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAAQGR8oYe_3n5QtoM2OrYSJXTbPmeb3VA",
  authDomain: "assignment-2-mdev-1005.firebaseapp.com",
  projectId: "assignment-2-mdev-1005",
  storageBucket: "assignment-2-mdev-1005.appspot.com",
  messagingSenderId: "724802285515",
  appId: "1:724802285515:web:3be2ec2a128bb23700d04e"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
const db = getFirestore(app);

//exporting the firebase app, auth and db

export { app, auth, db};

