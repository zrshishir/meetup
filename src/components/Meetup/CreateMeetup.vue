<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm-6 offset-sm3>
                <h2 class="purple--text">Create a meetup</h2>
            </v-flex>
        </v-layout>
        <v-layout>
            <v-flex xs12>
                <form @submit.prevent="onCreateMeetup">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="title" label="Title" v-model="title" id="title" color="purple"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="location" label="Location" v-model="location" id="location" color="purple"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="imageUrl" label="imageUrl" v-model="imageUrl" id="image-url" color="purple"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-img :src="imageUrl"></v-img>
                        </v-flex>
                    </v-layout>
                     <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field name="description" label="Description" v-model="description" id="description" multi-line color="purple"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn flat dark class="purple darken3" type="submit" :disabled="!meetupForm">Create Meetup</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data() {
            return {
                title: "",
                location: "",
                imageUrl: "",
                description: "",
            }
        },
        computed:{
            meetupForm(){
                return this.title != '' && this.location != '' && this.imageUrl != '' && this.description != ''
            }
        }, 
        methods: {
            onCreateMeetup(){
                const meetupData = {
                    title: this.title,
                    location: this.location,
                    imageUrl: this.imageUrl,
                    description: this.description,
                    date: new Date()
                }
            }
        }
    }
</script>