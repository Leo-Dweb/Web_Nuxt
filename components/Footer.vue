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
                            <div>
                                <a v-for="items in direct" :title="items.title" :href="items.site" class="px-2" target="_blank" > 
                                    <img class="icon_direction" :src="items.icon" alt="">
                                </a>
                                <h4 class="naranja--text">Síguenos</h4>     
                            </div>
                            
                            <div class="d-flex align-end pt-2">
                                <img class="icon_location" src="/icons/global.png" alt="">
                                <strong class="ma-1 mint--text">Gracias, Lempira, Honduras</strong>
                            </div>
                        </div>
                    </v-col>
                    <!-- IMG -->
                    <v-col cols="12" sm="12" class="">
                        <v-img
                        class="mx-auto"
                        contain
                        max-width="120"
                        min-height="60"
                        src="/img/Dweb_Navbar.svg"
                        ></v-img>
                    </v-col>
                </v-row>
        </v-footer>
                    <div class="d-flex justify-center dark">
                        <small class="naranja--text"> &copy; D-Web - Derechos Reservados | {{ año }}</small>
                    </div>
    </div>
        
</template>

<script>
export default {
    data (){
        return{
            direct: [ 
                { title: 'Facebook', site: 'https://facebook.com',  icon: '/icons/facebook.png'},
                { title: 'Gmail', site: 'https://gmail.com', icon: '/icons/gmail.png'},
                { title: 'WhatsApp', site: 'https://whatsapp.com', icon: '/icons/whatsapp.png'}
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
    .icon_location {
        margin: 4px;
        max-width: 30px;
        min-height: 10px;
        
    }
</style>