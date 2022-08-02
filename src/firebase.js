import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAMANErILhrxjlDV5RKKGi9VJ817A8AYpI",
    authDomain: "mb-bachelorsapplicationthesis.firebaseapp.com",
    projectId: "mb-bachelorsapplicationthesis",
    storageBucket: "mb-bachelorsapplicationthesis.appspot.com",
    messagingSenderId: "899936815466",
    appId: "1:899936815466:web:f0df8be92b2787880e7d13"

})

const db = firebaseApp.firestore()

const auth = firebase.auth()

export { db, auth }