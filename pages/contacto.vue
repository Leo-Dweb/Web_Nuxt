<template>
    <div>
        
        <v-container>
            <v-row class="justify-center">
                <!-- CAROUSEL -->
                <v-col cols="12" sm="8" xl="12">
                    <carousel-service/>
                </v-col>
                <!-- Form -->
                <v-col cols="12" sm="4" xl="4">
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

    components:{
        FormContac,
        CarouselService
    },
    layout: 'form'
}
</script>