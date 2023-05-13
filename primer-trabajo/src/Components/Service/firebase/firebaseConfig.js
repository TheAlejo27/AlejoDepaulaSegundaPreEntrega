import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyBkZuf_ehra82CppJPbF5hvqXUAMPay0k8",
  authDomain: "hardworld-cee97.firebaseapp.com",
  projectId: "hardworld-cee97",
  storageBucket: "hardworld-cee97.appspot.com",
  messagingSenderId: "996740547386",
  appId: "1:996740547386:web:81a385c89a843230b9c603"
};




// Initialize Firebase
console.log("0)Estoy configurando mi firebase con el objeto: ", firebaseConfig);

const app = initializeApp(firebaseConfig);

console.log(app);
export const db = getFirestore(app);

