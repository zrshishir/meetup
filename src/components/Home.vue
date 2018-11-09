<template>
   <v-container>
       <v-layout row wrap class="mb-2">
           <v-flex xs12 sm6 class="text-xs-center text-sm-right">
               <v-btn large to="/meetups" dark class="purple darken-3">Explore Meetups</v-btn>
           </v-flex>
           <v-flex xs12 sm6 class="text-xs-center text-sm-left">
               <v-btn large to="/meetup/new" dark class="purple darken-3">Organize Meetup</v-btn>
           </v-flex>
       </v-layout>
       <v-layout row wrap>
           <v-flex xs12>
               <v-carousel style="cursor: pointer">
                   <v-carousel-item v-for="meetup in meetups" :src="meetup.imageUrl" :key="meetup.id" @click="onLoadMeetup(meetup.id)">
                       <div class="title">{{ meetup.title }}</div>
                   </v-carousel-item>
               </v-carousel>
           </v-flex>
       </v-layout>
   </v-container>
</template>

<script>
    export default {
        data(){
            return{
            
            }
        },
        computed: {
            meetups(){
                return this.$store.getters.featuredMeetups
            }
        },
        methods:{
            onLoadMeetup(id){
                this.$router.push('/meetups/'+id)
            }
        }
    }
</script>

<style scoped>
    .title {
        position:absolute;
        bottom:50px;
        background-color: rgba(0,0,0,0.5);
        color:white;
        font-size: 2em;
        padding:20px;
    }
</style>
