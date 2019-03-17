import firebase from "firebase";
const config = {
    apiKey: "AIzaSyB9dOyDFvq51y7gH7ZtoITSOhSLlci0GS8",
    authDomain: "react-comment-d6fab.firebaseapp.com",
    databaseURL: "https://react-comment-d6fab.firebaseio.com",
    projectId: "react-comment-d6fab",
    storageBucket: "",
    messagingSenderId: "589367347080"
};
firebase.initializeApp(config);

const databaseRef = firebase.database().ref();
export const commentsRef = databaseRef.child("comments");
export const authRef = firebase.auth();
export const provider = new firebase.auth.GoogleAuthProvider();