<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12 sm10 md8 offset-sm1 offset-md2>
                <v-card>
                    <v-card-title>
                        <h3 class="purple--text">{{ meetup.title}}</h3>
                    </v-card-title>
                    <v-card-media :src="meetup.imageUrl" height="400px">
                    </v-card-media>
                    <v-card-text>
                        <div class="info--text">{{ meetup.date }}</div>
                        <div>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dicta assumenda ipsa reiciendis ducimus dolorem pariatur quos modi a beatae minima perferendis quibusdam nemo alias necessitatibus aliquam nulla, dolores cupiditate voluptatem</div>
                    </v-card-text>
                    <v-card-action>
                        <v-icon>signup</v-icon>
                        <v-btn flat dark class="purple darken-3" to="">Register</v-btn>
                    </v-card-action>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        props: ['id'],
        computed: {
            meetup(){
                return this.$store.getters.loadedMeetup(this.id)
            }
        }
    }
</script>

