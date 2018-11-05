<template>
    <v-container>
        <v-layout row>
            <v-flex xs12 sm6 offset-sm3 >
                <h2 color="purple--text">My Profile</h2>
            </v-flex>
        </v-layout>
        <v-layout row wrap>
            <v-flex xs12>
                <form>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field label="First Name" v-model="firstName" color="purple"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field label="Last Name" v-model="lastName" color="purple"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout row>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-text-field label="Mobile No" v-model="mobileNo" color="purple"></v-text-field>
                        </v-flex>
                    </v-layout>
                    <v-layout>
                        <v-flex xs12 sm6 offset-sm3>
                            <v-btn flat dark class="purple darken-3" type="submit">Submit</v-btn>
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
                firstName: '',
                lastName: '',
                mobileNo: ''
            }
        }
    }
</script>