<template>
    
        <v-app-bar app absolute
            flat color="dark" height="100"
            >

            
            <!-- ICON Hamburger -->
            <v-app-bar-nav-icon></v-app-bar-nav-icon>

            <!-- IMG -->
            <div class="container px-2 d-flex justify-start" >
                <NuxtLink to="/">
                    <v-img 
                    contain
                    src="img/Dweb_Navbar.svg"
                    max-width="170"
                    max-height="100"
                    ></v-img>
                </NuxtLink>
            </div>

            <!-- Routes -->
            <div class="container d-flex align-self-center justify-end" style="height: 50px">
                <v-btn v-for="(item, index) of linkNav" :key="index" :to="item.direction" text small color="">{{ item.title }}</v-btn>
                <modalsale textBtn="Servicios" :text="true" :small="true"/>
            </div>
        </v-app-bar>
</template>

<script>
import Modalsale from './Modalsale.vue'

export default {
    components: { Modalsale },
    data(){
        return{
            linkNav: [
                {title: 'Inicio', direction:'/', icon:''},
                // {title: 'Servicios', direction:'', icon:''},
                {title: 'Contacto', direction:'/contacto', icon:''},
                {title: 'Nosotros', direction:'/#about__direct', icon:''},
                {title: 'Tecnologias', direction:'/tecnolg', icon:''},
            ],

            
        }
    }
}
</script>
    
<style>

</style>