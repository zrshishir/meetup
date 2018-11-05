import firebase from 'firebase'

var config = {
    apiKey: "AIzaSyCj76FwWqBVB330ezwlW37Wo_XVcFGhH_k",
    authDomain: "meetup-110105.firebaseapp.com",
    databaseURL: "https://meetup-110105.firebaseio.com",
    projectId: "meetup-110105",
    storageBucket: "meetup-110105.appspot.com",
    messagingSenderId: "922755017235"
  };


const app = firebase.initializeApp(config)

export const db = app.database()
export const dbTable = db.ref('names')