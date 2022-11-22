import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBounp-DsuOhjHhkaAZw-87UIOx_RLU_CU",
    authDomain: "clone-ca532.firebaseapp.com",
    projectId: "clone-ca532",
    storageBucket: "clone-ca532.appspot.com",
    messagingSenderId: "890807511766",
    appId: "1:890807511766:web:c091e93631d83987e6b777",
    measurementId: "G-CB9JFME9Q6"
  };

  const firebaseApp = initializeApp(firebaseConfig);

  const db = getFirestore(firebaseApp);
  const auth = getAuth(firebaseApp);

  export { db, auth };