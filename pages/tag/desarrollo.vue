<template>
    <div>
        <div class="mb-4">
            <div>
                <h1>Desarrollo Web</h1>
            </div>
            <div class="d-flex justify-end">
                <v-btn class=""
                    elevation="1"
                    to="/tag/marketing"  
                    color="naranja">Marketing</v-btn>   
            </div>
        </div>
        <!-- CARD -->
        <v-container class="primaryweb pa-4">
                <v-row class="align-center">
                    <v-col cols="12" sm="6">
                        <div class="py-2">
                            <h2>Titulo del Servicio</h2>
                            <h3 class="mint--text">Sub-titulo</h3>
                        </div>
                        <div class="py-4">
                            <p>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime hic blanditiis, recusandae sit ratione nulla eligendi laudantium laborum deserunt, natus harum accusamus sed? Eveniet, aspernatur!<br>
                                    <br>
                                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae laborum, beatae ad hic debitis dolorum?
                            </p>
                        </div>
                        <div class="pb-4 d-flex justify-center">
                            <v-btn 
                                to="/contacto" 
                                color="mint"
                                outlined >Consulta</v-btn>
                        </div>
                    </v-col>
                    <v-col class="d-flex justify-center" cols="12" sm="6">
                        <v-img
                            contain 
                            src="../img/d-web_Team.png"
                            max-width="350"
                            min-height="200"
                        ></v-img>
                    </v-col>
                </v-row>
        </v-container>
    </div>
</template>

<script>
export default {
    data(){
        return{
            
        }
    }
}
</script>