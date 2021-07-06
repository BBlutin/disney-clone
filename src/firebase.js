import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyC5PMe8kM4CpXHhlP_rIiHAtCne28MvaTA",
    authDomain: "disney-clone-4e6b7.firebaseapp.com",
    projectId: "disney-clone-4e6b7",
    storageBucket: "disney-clone-4e6b7.appspot.com",
    messagingSenderId: "803842215531",
    appId: "1:803842215531:web:2c2846a744c0e7b1f2eb2e"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage };
export default db;