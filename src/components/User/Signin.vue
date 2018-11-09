<template>
    <v-container>
        <v-layout row wrap>
            <v-flex xs12>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <h2 color="purple">Signin Form</h2>
                        </v-flex>
                    </v-layout>
                <form @submit="login({ email, password })">
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field label="Email" type="email" v-model="email" placeholder="example@email.com" color="purple"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field label="Password" type="passwor" v-model="password" color="purple"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn flat dark type="submit" class="purple darken-3" to="/">Login</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
    export default {
        data(){
            return {
                email: '',
                password: ''
            }
        }, 
        computed: mapGetters(['isLoggedIn']),
        methods: {
            ...mapActions(['login'])
        }
    }
</script>