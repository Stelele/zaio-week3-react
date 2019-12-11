import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Replace this with your own config details
var fbConfig = {
  apiKey: "AIzaSyAn8NktnjkCtE001FOOv3cY_TluKrHvWQk",
  authDomain: "marioplan-zaio.firebaseapp.com",
  databaseURL: "https://marioplan-zaio.firebaseio.com",
  projectId: "marioplan-zaio",
  storageBucket: "marioplan-zaio.appspot.com",
  messagingSenderId: "870898481773",
  appId: "1:870898481773:web:e3953950d52c1d937a9d64",
  measurementId: "G-9YEXLDWVF5"
};
firebase.initializeApp(fbConfig);
firebase.firestore();

export default firebase;