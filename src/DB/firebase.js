// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { getAuth  } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBRBcUL2BfkMd03vab0sMuHqpHXnsHIh1Sirin",
  authDomain: "hoody-7541f.firebaseapp.com",
  databaseURL: "https://hoody-7541f-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "hoody-7541f",
  storageBucket: "hoody-7541f.appspot.com",
  messagingSenderId: "273238032018",
  appId: "1:273238032018:web:20f0e2ede9d40bf894f04b"
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const db = getFirestore(app)
const storage = getStorage(app);
const auth = getAuth(app)

export {db, storage,auth}
