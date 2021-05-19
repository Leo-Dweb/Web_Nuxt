<template>
    <div>
        <v-footer class="" color="darkfoot">
            <v-row class="align-center">
                <v-col class="d-flex justify-center my-2" cols="12">
                    <div v-for="(item, index) in iconlink" :key="index"> 
                        <a :href="item.site" target="_blank">
                            <v-img class="img_icon" :src="item.icon" :title="item.title"></v-img>
                        </a>
                    </div>
                </v-col>
            </v-row>
        </v-footer>
            <div class="d-flex justify-center dark">
                <small class="naranja--text"> &copy; D-Web - Derechos Reservados | {{ año }}</small>
            </div>
    </div>
</template>

<script>
import Footer from './Footer.vue'
export default {
    components: { Footer },
    data(){
        return{
            año: new Date().getFullYear(),

            iconlink: [
                { title: 'Facebook', site: 'https://facebook.com',  icon: '/icons/facebook.svg'},
                { title: 'Gmail', site: 'https://gmail.com', icon: '/icons/gmail.svg'},
                { title: 'WhatsApp', site: 'https://whatsapp.com', icon: '/icons/whatsapp.svg'}
            ]
        }
    }
}
</script>

<style>
    
    .img_icon{
        margin: 4px 8px;
        max-width: 28px;
        min-height: 12px;
    }
    
</style>