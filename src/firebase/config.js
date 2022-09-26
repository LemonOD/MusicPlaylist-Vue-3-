import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'
import 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyBiA_YImrMe5YOIZSk94-ZyWw2lXU5mXm0",
  authDomain: "odmusic-d3af2.firebaseapp.com",
  projectId: "odmusic-d3af2",
  storageBucket: "odmusic-d3af2.appspot.com",
  messagingSenderId: "859890198219",
  appId: "1:859890198219:web:dd44c62622c4f9e20add4e"
};

// init firebase
firebase.initializeApp(firebaseConfig)

// init services
const projectFirestore = firebase.firestore()
const projectAuth = firebase.auth()
const projectStorage = firebase.storage()

// timestamp
const timestamp = firebase.firestore.FieldValue.serverTimestamp

export { projectFirestore, projectAuth, projectStorage, timestamp }

