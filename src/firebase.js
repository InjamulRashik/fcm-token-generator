import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
const firebaseConfig = {
  //Add Firebase Configuration
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);
