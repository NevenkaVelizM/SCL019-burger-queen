import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyB25AouQMEp4dfNICBjxFr2Dk87N0uzC7s",
    authDomain: "burgerqueen-suburger-ecb17.firebaseapp.com",
    projectId: "burgerqueen-suburger-ecb17",
    storageBucket: "burgerqueen-suburger-ecb17.appspot.com",
    messagingSenderId: "720906244469",
    appId: "1:720906244469:web:de284a290c5931258f433c"
  };

const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
