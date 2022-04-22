import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: "AIzaSyDCWlPoKsCkyXZyW-FNfU70WXX44fPcR7I",
  authDomain: "bankingbyhyv.firebaseapp.com",
  projectId: "bankingbyhyv",
  storageBucket: "bankingbyhyv.appspot.com",
  messagingSenderId: "73975985471",
  appId: "1:73975985471:web:a3e44d12a029afbfb24f8a",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();


export { db };
export default firebase;