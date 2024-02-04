import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyDsjju-AZscAvfWOqHnxFJPa-jqr2VZJvY",
  authDomain: "mern-auth-c27cf.firebaseapp.com",
  projectId: "mern-auth-c27cf",
  storageBucket: "mern-auth-c27cf.appspot.com",
  messagingSenderId: "931196922836",
  appId: "1:931196922836:web:a423621bc0ca4620890441",
  measurementId: "G-877NJW6JLY"
};

export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
