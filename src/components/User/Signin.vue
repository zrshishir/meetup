<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6  offset-sm3>
                <h2 color="purple--text">Login Form</h2>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12>
                <form>
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
                            <v-btn flat dark type="submit" class="purple darken-3">Login</v-btn>
                        </v-flex>
                    </v-layout>
                </form>
            </v-flex>
        </v-layout>
    </v-container>
</template>

<script>
    export default {
        data(){
            return {
                email: '',
                password: ''
            }
        }
    }
</script>