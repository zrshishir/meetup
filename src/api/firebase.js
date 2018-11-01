import firebase from 'firebase'

export default {
    login(){
        window.location = firebase.initializeApp({
            apiKey: "AIzaSyCj76FwWqBVB330ezwlW37Wo_XVcFGhH_k",
            authDomain: "meetup-110105.firebaseapp.com",
            databaseURL: "https://meetup-110105.firebaseio.com",
            projectId: "meetup-110105",
            storageBucket: "meetup-110105.appspot.com"
        })
    },

    signupUser(){

    }
}