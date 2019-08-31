    
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
const config = {
    apiKey: "AIzaSyCT-_O8nXpL8Z2XdxpwgoKroVqnwjvxo6g",
    authDomain: "codress-e5d1e.firebaseapp.com",
    databaseURL: "https://codress-e5d1e.firebaseio.com",
    projectId: "codress-e5d1e",
    storageBucket: "",
    messagingSenderId: "694489733011",
    appId: "1:694489733011:web:bb65c2e5566d8032"
  };
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;