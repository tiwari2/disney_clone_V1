import firebase from 'firebase/compat/app';
import "firebase/compat/auth";
import "firebase/compat/firestore";
import 'firebase/compat/storage';

const firebaseConfig = {
  apiKey: "AIzaSyD_XPFQBgBeKOEu3AMzkmF-fPfUONCAfNg",
  authDomain: "disneyplus-clone-v1.firebaseapp.com",
  projectId: "disneyplus-clone-v1",
  storageBucket: "disneyplus-clone-v1.appspot.com",
  messagingSenderId: "832313958134",
  appId: "1:832313958134:web:df3d99b401fee759be16d7",
  measurementId: "G-H7J9H5SPCN"
};


  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();
  const db = firebaseApp.firestore();
  const storage = firebase.storage();

  export { auth, provider,storage};
  export default db;