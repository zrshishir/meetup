import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
    state: {
        loadedMeetups: [
            { 
                id: '1', 
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/5/5e/Our_Bangladesh.jpg', 
                title: 'Village, Bangladesh', 
                location: 'Bangladesh',
                date: '2018-10-29'
            },
            { 
                id: '2', 
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Natural_beauty_of_bangladesh_village.JPG', 
                title: 'Nature, Bangladesh', 
                location: 'Bangladesh',
                date: '2018-10-30'
            }
        ], 
        users:{
            id: '111',
            registeredMeetups: [
                '111'
            ]
        }
    }, 

    mutations: {
        createMeetup(state, payload){
            state.loadedMeetups.push(payload)
        }
    },

    actions: {
        createMeetup({ commit }, payload){
            const meetup = {
                title = payload.title,
                location = payload.location,
                imageUrl = payload.imageUrl,
                description = payload.description,
                date = payload.date
            }
            //Reach out to firebase and store it
            commit('createMeetup', meetup)
        }
    }, 

    getters: {
        loadedMeetups(state){
            return state.loadedMeetups.sort((meetupA, meetupB) => {
                return meetupA.date > meetupB.date
            })
        }, 

        featuredMeetups(state, getters){
            return getters.loadedMeetups.slice(0, 5)
        },

        loadedMeetup(state){
            return (meetupId) => {
                return state.loadedMeetups.find((meetup) => {
                    return meetup.id === meetupId
                })
            }
        }
    }
})