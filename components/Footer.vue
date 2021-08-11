<template>
    <div>
        <v-footer class=" px-4" color="darkfoot">
                <v-row class="align-center ma-0">
                    <!-- CONTACTANOS -->
                    <v-col class="d-flex justify-center" cols="12" sm="6">
                        <div>
                            <h3 class="naranja--text">¡Necesitas Ayuda!</h3>
                            <v-btn to="/contacto" class="mt-2" color="mint" small>Contáctanos</v-btn>
                            <h4 class=" naranja--text mt-2">Diseña, Desarrolla y Crece</h4>
                            <p class="mb-0">Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ex repellat deserunt voluptas eum impedit, assumenda alias minus ullam corrupti?</p>
                        </div>
                        
                    </v-col>
                    <!-- Dirección -->
                    <v-col class="d-flex justify-center" cols="12" sm="6">
                        <div>
                            <div class="d-flex justify-center">
                                <a v-for="items in direct" :title="items.title" :href="items.site" class="px-2" target="_blank" > 
                                    <img class="icon_direction" :src="items.icon" alt="">
                                </a>
                                <!-- <h4 class="naranja--text">Nuestras redes</h4>      -->
                            </div>
                            <!-- Ubicacion -->
                            <div class=" d-flex align-center pt-2">
                                <div class="icon_location d-flex">
                                    <img src="/icons/icon_Location.svg">
                                </div>
                                <div>
                                    <b class="text-location ma-1 mint--text">Gracias, Lempira, Honduras</b>
                                </div>
                            </div>
                        </div>
                    </v-col>
                    <!-- IMG -->
                    <v-col cols="12" sm="12" class="">
                        <v-img
                        class="mx-auto"
                        contain
                        max-width="150"
                        min-height="50"
                        src="/img_d-web.svg"
                        ></v-img>
                    </v-col>
                </v-row>
        </v-footer>
                    <div class="d-flex justify-center dark">
                        <small class="white--text"> &copy; D-Web - Derechos Reservados | {{ año }}</small>
                    </div>
    </div>
        
</template>

<script>
export default {
    data (){
        return{
            direct: [ 
                { title: 'Facebook', site: 'https://facebook.com',  icon: '/icons/social_media/Icon_Facebook.svg'},
                { title: 'Instagram', site: 'https://instagram.com', icon: '/icons/social_media/Icon_Instagram.svg'},
                { title: 'LinkedIn', site: 'https://linkedin.com', icon: '/icons/social_media/Icon_Linkedin.svg'},
                { title: 'WhatsApp', site: 'https://whatsapp.com', icon: '/icons/social_media/Icon_WhatsApp.svg'}
            ],
            año: new Date().getFullYear()
            
        }
    },
    
}
</script>


<style>
    .icon_direction{
        max-width: 24px;
        min-height: 24px;
    }
    .icon_location img{
        margin: 4px;
        min-height: 30px;
        
    }
    .text-location{
        font-size: 14px;
    }
</style>