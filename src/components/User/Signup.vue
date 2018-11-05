<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <form @submit="onSignup">
                                <v-layout row>
                                    <v-flex xs12 sm6 offset-sm3>
                                        <v-text-field name="email" label="Email" id="email" v-model="email" type="email" color="purple"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12 sm6 offset-sm3>
                                        <v-text-field name="password" label="Password" id="password" v-model="password" type="password" color="purple"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12 sm6 offset-sm3>
                                        <v-text-field name="confirmPassword" label="Confirm Password" v-model="confirmPassword" type="password" aria-errormessage="comparePassword" color="puple"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12 sm6 offset-sm3>
                                        <v-btn flat dark class="purple darken-3" @click="onSignup" :disabled="!isValidateForm">Sign Up</v-btn>
                                    </v-flex>
                                </v-layout>
                            </form>
                        </v-container>
                    </v-card-text>
                </v-card>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import firebase from 'firebase'

    export default {
        name: 'Signup',
        data() {
            return {
                email: '',
                password: '',
                confirmPassword: ''
            }
        },
        computed: {
            comparePassword(){
                return this.password !== this.confirmPassword
            },
            isValidateForm(){
                return this.email !== '' && this.password !== '' && this.confirmPassword !== ''
            }
        },
        
        methods: {
            // ...mapActions(['signupUser']),

            onSignup(){
                firebase.auth().createUserWithEmailAndPassword(this.email, this.password)
                .then(
                    user => {
                       console.log(user.uid)
                    }
                    
                ).catch(
                    error => {
                        console.log(error)
                    }
                )
            }
        }
    }
</script>