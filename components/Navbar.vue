<template>
    <div>
        <!-- NAVBAR -->
        <v-app-bar app absolute flat color="dark" height="65">
            <!-- ICON Hamburger -->
            <div 
            @click="drawer = !drawer"
            class="d-flex d-md-none drawer_menu"
            > 
                <img class="icon_nav" src="/icons/navbar_drawer/Menu_d-web.svg">
            </div>
            
            <!-- IMG -->
            <div class=" d-flex justify-start" >
                <NuxtLink to="/">
                    <v-img 
                    title="Página de Inicio"
                    contain
                    src="/img_d-web.svg"
                    max-width="150"
                    max-height="55"
                    ></v-img>
                </NuxtLink>
            </div>

            <!-- Routes Link-->
            <v-list-item class="container d-none d-md-flex align-self-center justify-end mr-4">
                <v-divider vertical class="mint mx-2 " ></v-divider>
                <v-btn 
                    v-for="(item, index) in linkNav" :key="index"
                    :to="item.link"
                    class="mx-1"
                    icon
                    plain>
                    <v-tooltip bottom color="mint">
                        <template v-slot:activator="{ on, attrs }">
                                <img
                                v-bind="attrs"
                                v-on="on"
                                class="icon_nav"
                                :src="item.icon"> 
                        </template>
                        <span>{{item.title}}</span>
                    </v-tooltip>
                </v-btn>
                <v-tooltip bottom color="mint">
                    <template v-slot:activator="{ on, attrs }">
                        <div v-bind="attrs" v-on="on">
                            <Modalsale textIcon="/icons/navbar_drawer/Services_d-web.svg" :icon="true" :plain="true"/>
                        </div>
                    </template>
                    <span>Servicios</span>
                </v-tooltip>
            </v-list-item>
        </v-app-bar>
        <!-- END NAVBAR -->

        <!-- DRAWER -->
        <v-navigation-drawer app 
            temporary
            v-model="drawer">
            
            <v-list-item>
                <v-list-item-content class="justify-center">
                    <v-img src="/img_d-web.svg" contain 
                        max-width="190"
                        min-height="70"
                    ></v-img>
                </v-list-item-content>
            </v-list-item>
            <!-- divider -->
            <v-divider class="mint" ></v-divider>
                <v-list>
                    <v-list-item link
                        v-for="(item, index) in linkNav" :key="index"
                        :to="item.link">
                            <v-list-item-content>
                                <v-list-item-title class="d-flex align-center">
                                    <img class="icon_nav mr-4" :src="item.icon"> {{item.title}}
                                </v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>
                    <!-- BTN SERVICE -->
                    <v-list-item>
                        <v-list-item-title class="d-flex align-center">
                            <!-- Icon section -->
                            <img class="icon_nav mr-4" src="/icons/navbar_drawer/Services_d-web.svg">
                            <!-- Icon section END -->
                            <modalsale textBtn="Servicios" :small="true" :color="'mint'"/>
                        </v-list-item-title>
                    </v-list-item>
                    <!-- END BTN -->
                </v-list>
        </v-navigation-drawer>
        <!-- END DRAWER -->
    </div>
</template>

<script>
import Modalsale from './Modalsale.vue'

export default {
    components: { Modalsale },
    data(){
        return{
            linkNav: [
                {title: 'Inicio', link:'/', icon:'/icons/navbar_drawer/Home_d-web.svg'},
                {title: 'Contacto', link:'/contacto', icon:'/icons/navbar_drawer/Contacto_noti_d-web.svg'},
                {title: 'Nosotros', link:'/#about__direct', icon:'/icons/navbar_drawer/About_us_d-web.svg'},
                
            ],
            drawer: false
            
        }
    }
}
</script>

<style>
.icon_nav{
    max-width: 24px;
    min-height: 24px;
}
.drawer_menu{
    cursor: pointer;
}
</style>