<template>
    <div>
        
        <v-container>
            <v-row class="justify-center">
                <!-- CAROUSEL -->
                <v-col cols="12" sm="6" md="7" xl="12">
                    <carousel-service/>
                </v-col>
                <!-- Form -->
                <v-col cols="12" sm="6" md="5" xl="5">
                    <form-contac/>
                </v-col>
            
            </v-row>
        </v-container>
        
    </div>
</template>

<script>
import CarouselService from '../components/CarouselService.vue'
import FormContac from '../components/FormContac.vue'


export default {
    head(){
        return {
            title: 'Contacto',

            meta: [
                {
                    hid: '',
                    name:'',
                    content: ''
                }
            ]
        }
    },

    components:{
        FormContac,
        CarouselService
    },
    layout: 'form'
}
</script>