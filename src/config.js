
import { initializeApp } from "firebase/app";
import {getStorage} from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBnNVCePsjEs8UzQmbZAR8QV0_Kq_JQeC0",
  authDomain: "imageuploader-74c23.firebaseapp.com",
  projectId: "imageuploader-74c23",
  storageBucket: "imageuploader-74c23.appspot.com",
  messagingSenderId: "32077780798",
  appId: "1:32077780798:web:12dfc54049aa951a2b3e6f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const imageDB = getStorage(app)