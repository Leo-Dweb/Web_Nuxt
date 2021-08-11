<template>
    <div>
        <v-footer class="" color="darkfoot">
            <v-row class="align-center">
                <v-col class="d-flex justify-center pa-4" cols="12">
                    <div v-for="(item, index) in iconlink" :key="index"> 
                        <a :href="item.site" target="_blank">
                            <v-img class="img_icon" :src="item.icon" :title="item.title"></v-img>
                        </a>
                    </div>
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
    data(){
        return{
            año: new Date().getFullYear(),

            iconlink: [
                { title: 'Facebook', site: 'https://facebook.com',  icon: '/icons/social_media/Icon_Facebook.svg'},
                { title: 'Instagram', site: 'https://instagram.com', icon: '/icons/social_media/Icon_Instagram.svg'},
                { title: 'LinkedIn', site: 'https://linkedin.com', icon: '/icons/social_media/Icon_Linkedin.svg'},
                { title: 'WhatsApp', site: 'https://whatsapp.com', icon: '/icons/social_media/Icon_WhatsApp.svg'}
            ]
        }
    }
}
</script>

<style>
    
    .img_icon{
        margin: 4px 8px;
        max-width: 24px;
        min-height: 12px;
    }
    
</style>