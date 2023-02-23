// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
// import 'firebase/compat/firestore';
// import 'firebase/storage';

import firebase from 'firebase';



const firebaseConfig = {
  apiKey: "AIzaSyCt6Ab_14eoZlNmnbuKc2rZn3JCySZkM_s",
  authDomain: "disneyplus-25f9d.firebaseapp.com",
  projectId: "disneyplus-25f9d",
  storageBucket: "disneyplus-25f9d.appspot.com",
  messagingSenderId: "1063062544401",
  appId: "1:1063062544401:web:e54390293e2f40383ad1b0"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();


export {auth, provider, storage};
export default db;




// project-1063062544401