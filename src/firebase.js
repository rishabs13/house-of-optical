import firebase from 'firebase/app'
import "firebase/auth"


const firebaseConfig = firebase.initializeApp({

    apiKey: "AIzaSyCVUf5OWCLMpeaM4NnY0zZlVWFJNRy3vyc",
    authDomain: "houe-optical.firebaseapp.com",
    projectId: "houe-optical",
    storageBucket: "houe-optical.appspot.com",
    messagingSenderId: "367105885178",
    appId: "1:367105885178:web:d1b6fc3bef03f019a79a43"

    // apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    // authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    // projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    // storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    // messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    // appId: process.env.REACT_APP_FIREBASE_APP_ID
  });




export const auth = firebaseConfig.auth();
export const provider = new firebase.auth.GoogleAuthProvider();
export default firebaseConfig;