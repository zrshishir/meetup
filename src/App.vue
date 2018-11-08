<template>
  <v-app>
   <v-navigation-drawer temporary fixed enable-resize-watcher v-model="sideNav" dark class="purple darken-3">
       <v-list>
         <v-list-tile v-for="item in menuItems" :key="item.title" :to="item.link">
           <v-list-tile-action>
             <v-icon>{{ item.icon }}</v-icon>
           </v-list-tile-action>
           <v-list-tile-content>
             {{ item.title }}
           </v-list-tile-content>
         </v-list-tile>
       </v-list>
     </v-navigation-drawer>
   
    <v-toolbar :clipped-left="clipped" dark class="purple darken-3">
      <v-toolbar-side-icon @click.stop="sideNav = !sideNav"></v-toolbar-side-icon>
      <v-btn icon @click.stop="miniVariant = !miniVariant">
        <v-icon v-html="sideNav ? 'chevron_left' : 'chevron_right'"></v-icon>
      </v-btn>
      <v-toolbar-title>
        <router-link to="/" tag="span" style="cursor:pointer">My Vuetify App</router-link>
      </v-toolbar-title>
      <v-spacer></v-spacer>
      <v-toolbar-items class="hidden-sm-and-down floating">
        <v-btn flat v-if="isLoggedIn" v-for="item in menuItems" :key="item.title" :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
        <v-btn flat v-else v-for="item in menuSignouts" :key="item.title" :to="item.link">
          <v-icon left dark>{{ item.icon }}</v-icon>
          {{ item.title }}
        </v-btn>
      </v-toolbar-items>
    </v-toolbar>
     <content>
      <router-view>
        
      </router-view>
    </content>
     <!-- <v-footer :fixed="fixed" dark class="purple darken-3">
      <span>&copy; 2017</span>
    </v-footer> -->
  </v-app>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  name: 'App',
  
  data () {
    return {
      clipped: false,
      sideNav: false,
      fixed: false,
      menuItems:[
        { icon: 'supervisor_account', title: 'View Meetups', link: '/meetups'},
        { icon: 'room', title: 'Organize Meetups', link: '/meetup/new'},
        { icon: 'person', title: 'Profile', link: '/profile'},
        { icon: 'face', title: 'Sign out', link: '/signout'},
      ],
      menuSignouts: [
         { icon: 'face', title: 'Sign up', link: '/signup'},
         { icon: 'lock_open', title: 'Sign in', link: '/signin'},
      ]
    }
  }, 
  computed:{
    ...mapGetters(['isLoggedIn'])
  }, 
  methods: {
    ...mapActions(['logout'])
  }
}
</script>
