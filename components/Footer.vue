<template>
        <v-footer 
        class=" px-4" 
        color="darkfoot">
    
                <v-row class="align-center">
                    <!-- CONTACTANOS -->
                    <v-col order="2" cols="12" sm="6"> 
                        <div>
                            <h3 class="naranja--text">!Consulta nuestros servicios¡</h3>
                            <v-btn to="/contacto" class="mt-2" color="mint">Contáctanos</v-btn>
                            <h4 class=" naranja--text mt-2">Diseña, Desarrolla y Crece</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Optio ex repellat deserunt voluptas eum impedit, assumenda alias minus ullam corrupti?</p>
                        </div>                  
                    </v-col>
                    <!-- IMG -->
                    <v-col order="1" cols="12" sm="12" class="">
                        <v-img
                        class="mx-auto"
                        contain
                        width="94"
                        height="94"
                        src="img/Dweb_Navbar.svg"
                        ></v-img>
                    </v-col>
                    <!-- Dirección -->
                    <v-col class="d-flex justify-end" order="3" cols="12" sm="6">
                        <div>
                            <div class="">
                                <a v-for="items in direct" :title="items.title" :href="items.site" class="px-2" target="_blank" > 
                                    <img class="icon_direction" :src="items.icon" alt="">
                                </a>
                            </div>
                            <h4 class="naranja--text">Síguenos</h4>
                            
                            <div class="">
                                <p class="mint--text">Gracias, Lempira, Honduras</p>
                            </div>
                        </div>
                    </v-col>
                </v-row>

        </v-footer>
</template>

<script>
export default {
    data (){
        return{
            direct: [ 
                { title: 'Facebook', site: 'https://facebook.com',  icon: 'icons/facebook.png'},
                { title: 'Gmail', site: 'https://gmail.com', icon: 'icons/gmail.png'},
                { title: 'WhatsApp', site: 'https://whatsapp.com', icon: 'icons/whatsapp.png'}
            ]
        }
    }
}
</script>


<style>
    .icon_direction{
        max-width: 24px;
        min-height: 24px;
    }
</style>