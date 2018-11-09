<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3>
                <v-card>
                    <v-card-text>
                        <v-container>
                            <v-layout row>
                                <v-flex xs12 sm6 offset-sm3>
                                    <h2 color="purple">Sign up Form</h2>
                                </v-flex>
                            </v-layout>
                            <form>
                                <v-layout row>
                                    <v-flex xs12 sm6 offset-sm3>
                                        <v-text-field label="Email" id="email" v-model="email" type="email" color="purple"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12 sm6 offset-sm3>
                                        <v-text-field label="Password" id="password" v-model="password" type="password" color="purple"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12 sm6 offset-sm3>
                                        <v-text-field label="Confirm Password" v-model="confirmPassword" type="password" color="puple"></v-text-field>
                                    </v-flex>
                                </v-layout>
                                <v-layout row>
                                    <v-flex xs12 sm6 offset-sm3>
                                        <v-btn flat dark class="purple darken-3" @click="signupUser({email, password})" :disabled="!isValidateForm">Sign Up</v-btn>
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
            ...mapGetters(['isLoggedIn']),
            comparePassword(){
                return this.password !== this.confirmPassword
            },
            isValidateForm(){
                return this.email !== '' && this.password !== '' && this.confirmPassword !== ''
            }
        },
        
        methods: {
            ...mapActions(['signupUser'])
        }
    }
</script>