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
                date: '2018-10-29'
            },
            { 
                id: '2', 
                imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/e/ea/Natural_beauty_of_bangladesh_village.JPG', 
                title: 'Nature, Bangladesh', 
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

    },

    actions: {

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