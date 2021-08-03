<template>
    <div>
        <!-- NAVBAR -->
        <v-app-bar app absolute flat color="dark" height="100">
            <!-- ICON Hamburger -->
            <v-app-bar-nav-icon 
                @click="drawer = !drawer"
                class="d-flex d-md-none"    
            ></v-app-bar-nav-icon>

            <!-- IMG -->
            <div class="container px-2 d-flex justify-start ml-4" >
                <NuxtLink to="/">
                    <v-img 
                    contain
                    src="/img/Dweb_Navbar.svg"
                    max-width="170"
                    max-height="100"
                    ></v-img>
                </NuxtLink>
            </div>

            <!-- Routes Link-->
            <v-list-item class="container d-none d-md-flex align-self-center justify-end mr-4">
                <v-divider vertical class="mint mr-2" ></v-divider>
                <v-btn 
                    v-for="(item, index) in linkNav" :key="index"
                    :to="item.link"
                    class="mr-4" 
                    icon
                    plain>
                    <v-tooltip bottom color="mint">
                        <template v-slot:activator="{ on, attrs }">
                                <v-icon
                                    v-bind="attrs"
                                    v-on="on"
                                    size="24" >{{item.icon}}</v-icon>
                        </template>
                        <span>{{item.title}}</span>
                    </v-tooltip>
                </v-btn>
                <v-tooltip bottom color="mint">
                    <template v-slot:activator="{ on, attrs }">
                        <div v-bind="attrs" v-on="on">
                            <Modalsale textIcon="home_repair_service" :icon="true" :plain="true"/>
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
                    <v-img src="/img/Dweb_Navbar.svg" contain 
                        max-width="150"
                        min-height="70"
                    ></v-img>
                </v-list-item-content>
            </v-list-item>
            <v-divider class="mint" ></v-divider>
                <v-list>
                    <v-list-item link
                        v-for="(item, index) in linkNav" :key="index"
                        :to="item.link">
                            <v-list-item-content>
                                <v-list-item-title class="d-flex align-center">
                                    <span class="material-icons mr-4"> {{item.icon}} </span> {{item.title}}
                                </v-list-item-title>
                            </v-list-item-content>
                    </v-list-item>
                    <!-- BTN SERVICE -->
                    <v-list-item>
                        <v-list-item-title class="d-flex align-center">
                            <span class="material-icons mr-4"> home_repair_service </span> 
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
                {title: 'Inicio', link:'/', icon:'home'},
                {title: 'Contacto', link:'/contacto', icon:'contact_mail'},
                {title: 'Nosotros', link:'/#about__direct', icon:'groups'},
                
            ],
            drawer: false
            
        }
    }
}
</script>