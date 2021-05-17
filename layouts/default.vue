<template>
  <v-app >
    
    <Navbar/>
      <v-main  > 
        <v-container>
          <nuxt/>
        </v-container>
      </v-main>
    <Footer/>

  </v-app>
</template>

<script>
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";


export default {
  componets:{
    Navbar, Footer
  },
  data () {
    return {
      
    }
  }
}
</script>
