    
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

export const createUserProfileDocument = async (userAuth,additionalData) => {
  if(!userAuth) return 
  
  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()

  if (!snapShot.exists) {
    const { displayName, email } = userAuth
    const createdAt = new Date()
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    } catch (error) {
      console.log(`error creating user`,error.message)
    }
  }
  return userRef
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;