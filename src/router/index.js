import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home'
import Meetups from '@/components/Meetup/Meetups'
import CreateMeetup from '@/components/Meetup/CreateMeetup'
import Profile from '@/components/User/Profile'
import Signup from '@/components/User/Signup'
import Signin from '@/components/User/Signin'
import Meetup from '@/components/Meetup/Meetup'

Vue.use(VueRouter)

export default new VueRouter({
   
    routes: [
        { path: '/', name: 'Home', component: Home },
        { path: '/meetups', name: 'Meetups', component: Meetups },
        { path: '/meetup/new', name: 'CreateMeetup', component: CreateMeetup },
        { path: '/meetups/:id', name: 'Meetup', props:true, component: Meetup },
          
        { path: '/profile', name: 'Profile', component: Profile },
        { path: '/signup', name: 'Signup', component: Signup },
        { path: '/signin', name: 'Signin', component: Signin }
    ],
    mode: 'history',

})