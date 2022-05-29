import { initializeApp } from "firebase/app";
import { GithubAuthProvider, getAuth, signInWithPopup, } from "firebase/auth"


// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyCs6wtZicuxvKV1WkIJaXrUqB8COqAV5z0",
    authDomain: "jacksonmx-devter.firebaseapp.com",
    projectId: "jacksonmx-devter",
    storageBucket: "jacksonmx-devter.appspot.com",
    messagingSenderId: "212733217922",
    appId: "1:212733217922:web:9e87d5e30d369177bd389b",
    measurementId: "G-MG5VL8W43N"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

const mapUserFromFirebaseAuth = user => {
    const { photoURL, displayName, emial } = user;

    return {
        avatarURL: photoURL,
        username: displayName,
    }
}

export const onAuthStateChanged = (onChange) => {
    return auth.onAuthStateChanged(user => {
        const normalized = mapUserFromFirebaseAuth(user);
        onChange(normalized);
    })
}

export const logInWithGithub = () => {
    const githubProvider = new GithubAuthProvider();
    
    return signInWithPopup(auth, githubProvider)
    .then(mapUserFromFirebaseAuth)
}