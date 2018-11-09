// Authentication Module
// Created By Ziaur Rahman
// email: zrshishir@gmail.com
import firebase from 'firebase'
import { router } from '../../main'




const state = {
    token: window.localStorage.getItem('firebase_token'),
    errorCode: '',
    errorAuth: '',
    user: '',
    successMsg: ''

};
const getters = {
    isLoggedIn: (state) => {//login status
        return !!state.token
    },
    menus: (state) => {//router link identification for navigation bar so that unauthenticated user can't access unauthorized components
        if(state.token){
            return([
                { icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
                { icon: 'room', title: 'Organize Meetups', link: '/meetup/new'},
                { icon: 'person', title: 'Profile', link: '/profile'},
            ])
        }else{
            return ([
                { icon: 'face', title: 'Sign up', link: '/signup'},
                { icon: 'lock_open', title: 'Sign in', link: '/signin'},
            ])
        }
    }
};

const actions = {
    signupUser: ({ commit }, users ) => {//firebase signup function
       firebase.auth().createUserWithEmailAndPassword(users.email, users.password)
       .then(
           response => {
            window.localStorage.setItem('firebase_token', response.user.uid)
            router.push('/');
           }
       ).catch(
           error => {
               commit('setAuthError', error.code, error.message)
           }
       )
    },

    login: ({ commit }, users) => {//firebase login function
        firebase.auth().signInWithEmailAndPassword(users.email, users.password)
        .then(
            response => {
                window.localStorage.setItem('firebase_token', response.user.uid)
                router.push('/')
            }
        ).catch(
            error => {
                commit('setAuthError', error.code, error.message)
            }
        )
    },


    logout: ({commit}) => {//firebase sign out function 
        firebase.auth().signOut()
        .then(
           response => {
            commit('setToken', null)
            commit('setSuccessMsg', response.data)
            router.push('/')
           }
        ).catch(
            error => {
                commit('setAuthError', error.code, error.message)
            }
        )
    }

};

const mutations = {
    setToken: (state, token) => {//token set function
        state.token = token
    },

    setAuthError: ( state, errorCode, errorMessage) => {//error set function
        state.errorCode = errorCode
        state.errorAuth = errorMessage
    },
    setUser: (state, user) => { //user set function 
        state.user = user
    },

    setSuccessMsg: (state, msg) => {//success message setting function
        state.successMsg = msg
    }
};

export default {//exporting the authentication module objects
    state,
    getters,
    actions,
    mutations
}