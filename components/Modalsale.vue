<template>
        <v-dialog
            transition="dialog-bottom-transition"
            max-width="600"
        >

            <template v-slot:activator="{ on, attrs }">
            <v-btn
                :loading="loading"
                :block="block"
                :small="small"
                :color="color"
                :text="text"
                
                v-bind="attrs"
                v-on="on"
            > {{ textBtn }}</v-btn>
            </template>
            <template v-slot:default="dialog">
            <v-card>
                <v-toolbar
                color="primary"
                dark
                >Opening from the bottom</v-toolbar>
                <v-card-text>
                <div class="text-h2 pa-12">Hello world!</div>
                </v-card-text>
                <v-card-actions class="justify-end">
                <v-btn
                    text
                    @click="dialog.value = false"
                >Close</v-btn>
                </v-card-actions>
            </v-card>
            </template>
        </v-dialog>       
</template>-

v
<script>
// import Modalbtn from './Modalbtn.vue'

export default {
    data(){
        return{
            

        }
    },
    components: {},
    props: {
        textBtn: String,
        color: String,
        block: Boolean,
        text: Boolean,
        small: Boolean,
        loading: Boolean,



    },
    methods:{


    }
}
</script>

<style>

</style>