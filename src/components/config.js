import firebase from 'firebase';
// import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyA2aEe9-9mNvpZ7eKEu5e9FLAorIMIx45s",
  authDomain: "portfolio-489f3.firebaseapp.com",
  databaseURL: "https://portfolio-489f3.firebaseio.com",
  projectId: "portfolio-489f3",
  storageBucket: "portfolio-489f3.appspot.com",
  messagingSenderId: "827686824502",
  appId: "1:827686824502:web:69aecef4c3ab8fa8048697",
  measurementId: "G-WFHK3H7HB8"
};

firebase.initializeApp(firebaseConfig);
// firebase.firestore();

export default firebaseConfig;