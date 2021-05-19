<template>
        <v-dialog
            transition="slide-x-transition"
            max-width="600">
            <!-- BTN Dialog -->
            <template v-slot:activator="{ on, attrs }">
            <v-btn
                :link="link"
                :block="block"
                :small="small"
                :color="color"
                :text="text"
                :plain="plain"
                v-bind="attrs"
                v-on="on"
            >
            <v-icon size="18" class="mr-2" >{{textIcon}}</v-icon>{{ textBtn }}</v-btn>
            </template>
            <!-- BODY Dialog -->
            <template v-slot:default="dialog">
            <!-- Header -->
            <v-card class="primaryweb">
                <div class=" py-2 text-center">
                    <h1 > Servicios </h1>
                </div>
            <!-- Contenido -->
                <v-card-text>
                    <div class="pa-6">
                        <div >
                            <v-btn block to="/tag/desarrollo" @click="dialog.value = false" class="mb-4" color="mint" dark>Desarrollo Web</v-btn>
                            <v-btn block to="/tag/marketing" @click="dialog.value = false" color="naranja" dark>Marketing</v-btn>
                        </div>
                        <div class="d-flex justify-center">
                            <v-img
                                max-width="300"
                                min-height="150"
                                contain
                                src="/img/DWeb_colaboracion.svg">
                            </v-img>
                        </div>
                        <div class="text-center white--text">
                            <p>Cualquier tecnología suficientemente avanzada es equivalente a la magia. <br> <div  class="text-right"><cite>Arthur C. Clarke (Autor)</cite></div></p>
                        </div>
                    </div>
                </v-card-text>
                <!-- BTN Cierre -->
                <v-card-actions class="justify-end">
                    <v-btn
                        class="dark"
                        title="Cerrar"
                        text
                        @click="dialog.value = false"
                        icon
                        elevation="4"
                        >
                        <v-icon>
                            cancel
                        </v-icon>
                    </v-btn>
                </v-card-actions>
            </v-card>
            </template>
        </v-dialog>       
</template>
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
        textIcon: String,
        textIcon: String,
        color: String,
        block: Boolean,
        text: Boolean,
        plain: Boolean,
        small: Boolean,
        link: Boolean

    },
    methods:{
    }
}
</script>

<style>
    
</style>