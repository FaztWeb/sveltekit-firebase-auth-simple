import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  // Put your keys here
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
