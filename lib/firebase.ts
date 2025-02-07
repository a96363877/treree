import { initializeApp } from "firebase/app"
import { getFirestore } from "firebase/firestore"
import { getAuth } from "firebase/auth"

const firebaseConfig = {
  apiKey: "AIzaSyBTRzIOu6yN0Fiq6HGgtam6xc9MIsGKiE4",
  authDomain: "tree-sa.firebaseapp.com",
  projectId: "tree-sa",
  storageBucket: "tree-sa.firebasestorage.app",
  messagingSenderId: "1028453914907",
  appId: "1:1028453914907:web:31fd99fe3dcdb3b6fc5bbe",
  measurementId: "G-9QR56T5899"
}

const app = initializeApp(firebaseConfig)
export const db = getFirestore(app)

