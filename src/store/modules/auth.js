import firebase from 'firebase'
import { router } from '../../main'



const state = {
    token: window.localStorage.getItem('firebase_token'),
    errorCode: '',
    errorAuth: '',
    user: ''

};
const getters = {
    isLoggedIn: (state) => {
        return !!state.token
    }
};

const actions = {
    signupUser: ({ commit }, users ) => {
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

    login: ({ commit }, users) => {
        firebase.auth().signInWithEmailAndPassword(users.email, users.password)
        .then(
            response => {
                window.localStorage.setItem('firebase_token', response.user.uid)
            }
        ).catch(
            error => {
                commit('setAuthError', error.code, error.message)
            }
        )
    },


    logout: ({commit}) => {
        firebase.auth().signOut()
        .then(
            commit('setToken', null)
        ).catch(
            error => {
                commit('setAuthError', error.code, error.message)
            }
        )
    }

};

const mutations = {
    setToken: (state, token) => {
        state.token = token
    },

    setAuthError: ( state, errorCode, errorMessage) => {
        state.errorCode = errorCode
        state.errorAuth = errorMessage
    },
    setUser: (state, user) => {
        state.user = user
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}