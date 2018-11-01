import api from '../../api/firebase'
import firebase from 'firebase'



const state = {
    token: window.localStorage.getItem('firebase_token'),
    errorAuth: '',
    user: ''

};
const getters = {
    isLoggedIn: (state) => {
        return !!state.token
    }
};

const actions = {
    login: () => {
        api.login()
    },

    signupUser: ({ commit }, users ) => {
        
        firebase.auth().createUserWithEmailAndPassword(users.email, users.password)
        .then(
            user => {
                window.localStorage.setItem('firebase_token', user.uid)
            }
            
        ).catch(
            error => {
                commit('setAuthError', error.data.data)
            }
        )
    },

    finalizeLogin: ( ) => {
       
    }, 

    logout: ({commit}) => {
        commit('setToken', null)
    }

};

const mutations = {
    setToken: (state, token) => {
        state.token = token
    },

    setAuthError: ( state, error) => {
        state.errorAuth = error
    }
};

export default {
    state,
    getters,
    actions,
    mutations
}