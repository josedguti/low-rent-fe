import firebase from 'firebase/app';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyCmC5Wy8ViiP9i6UbhmyQQTUQRoAsVNedw",
    authDomain: "clothing-site-890df.firebaseapp.com",
    projectId: "clothing-site-890df",
    storageBucket: "clothing-site-890df.appspot.com",
    messagingSenderId: "661725973183",
    appId: "1:661725973183:web:c02dc3c3edb55b3836140a",
    measurementId: "G-MRSNXRLHXR"
};

firebase.initializeApp(firebaseConfig);

const provider = new firebase.auth.GoogleAuthProvider();
const auth = firebase.auth();

const login = () => {
    auth.signInWithPopup(provider);
}

const logout = () => {
    auth.signOut();
}

export {
    auth,
    login,
    logout
}