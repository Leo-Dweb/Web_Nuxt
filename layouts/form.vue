<template>
        <v-app>
            <navbar/>
            <v-main>
                <div class="maintag">
                    <v-container>
                        <nuxt/>
                    </v-container>
                </div>
            </v-main>
            <footform/>
        </v-app>
</template>

<script>
import Footform from '../components/Footform.vue'
import Navbar from '../components/Navbar.vue'
export default {
    components: { Navbar, Footform },
    
}
</script>

<style>
/* Background */
    .maintag{
        background-image: url(/img/wave.png);
        background-repeat: no-repeat;
        background-position: bottom;
        background-size: contain;
        height: auto;
    }
</style>