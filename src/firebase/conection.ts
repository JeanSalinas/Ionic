import { initializeApp } from "@firebase/app";
import { getAuth } from "@firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBBpCID4_9ye7sQnilqMwiTe2iSpJNS940",
  authDomain: "vue-firebase-f0b0b.firebaseapp.com",
  projectId: "vue-firebase-f0b0b",
  storageBucket: "vue-firebase-f0b0b.appspot.com",
  messagingSenderId: "151167873231",
  appId: "1:151167873231:web:fe356dcb08385f04ab07ba"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default app;