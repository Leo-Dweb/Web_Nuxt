<template>
  <div>
      <!-- Main 01 -->
    <v-container class="primaryweb my-5 img_main01 pa-0" >
      <v-img
        class="pa-0"
        src="img/D-Web_web_Wave.svg">
            <v-row class="">
                <v-col sm="12" md="8"> 
                    <h1 class="pa-4 mx-2 text-center">
                      DISEÑAMOS Y DESARROLLAMOS TU CRECIMIENTO
                    </h1>
                </v-col>

                <v-col class="" cols="12" sm="9">
                  <p class="pa-5 mx-6">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius modi recusandae, iste quas aliquam rerum, praesentium labore inventore mollitia hic iusto perferendis laboriosam, laudantium esse?
                  </p>
                </v-col>
            </v-row>
            
      </v-img>
    </v-container>

  <!-- Main 2 CARD -->
    <v-container class="primaryweb mb-5">
        <h2 class="pa-4 text-center">NUESTROS SERVICIOS</h2>

        <!-- CARD 1 -->
        <v-row class="">
          <v-col sm="6" md="4">
            <div class="d-flex justify-center">
              <v-card
              class="ma-4"
              color="blueweb"
              width="265px"
              height="500px">
              <v-img
                height="210"
                width="265"
                src="img/Media.png">
              </v-img>
                <div class="ma-1">
                  <v-card-title
              class="pa-1">
                Diseño y desarrollo Web
              <small class="mint--text mb-1">Desarrollo</small>
              </v-card-title>
              <v-card-text
                class="py-2">
                  <div>
                    <p class="mb-2">Leonardo ipsum dolor, sit amet consectetur adipisicing elit. Eius omnis minus voluptas consectetur obcaecati aperiam quasi earum adipisci provident in id, saepe amet assumenda quisquam.</p>
                  </div>
              </v-card-text>

              <v-divider class="mint mb-3" width=""></v-divider>

                  <div class="d-flex justify-end mr-2">
                    <v-btn
                      class=""
                      outlined
                      color=""
                      small
                      >Mas Informacion
                    </v-btn>
                  </div>
                </div>
            </v-card>
            </div>
            
          </v-col>
          <!-- Card 2 -->
          <v-col sm="6" md="4">
            <div class="d-flex justify-center">
              <v-card
              class="ma-4"
              color="blueweb"
              width="265px"
              height="500px">
              <v-img
                
                height="210"
                width="265"
                src="img/Media.png">
              </v-img>
                <div class="ma-1">
                  <v-card-title
              class="pa-1">
                Diseño y desarrollo Web
              <small class="mint--text mb-1">Desarrollo</small>
              </v-card-title>
              <v-card-text
                class="py-2"            
              >
                  <div>
                    <p class="mb-2">Leonardo ipsum dolor, sit amet consectetur adipisicing elit. Eius omnis minus voluptas consectetur obcaecati aperiam quasi earum adipisci provident in id, saepe amet assumenda quisquam.</p>
                  </div>
              </v-card-text>

              <v-divider class="mint mb-3" width=""></v-divider>

                  <div class="d-flex justify-end mr-2">
                    <v-btn
                      class=""
                      outlined
                      color=""
                      small
                      >Mas Informacion
                    </v-btn>
                  </div>
                </div>
              </v-card>
            </div>
          </v-col>
<!-- Card 3 -->
          <v-col cols="12" md="4">
            <div class="d-flex justify-center">
              <v-card
              class="ma-4"
              color="blueweb"
              width="265px"
              height="500px">
              <v-img
                height="210"
                width="265"
                src="img/Media.png">
              </v-img>
                <div class="ma-1">
                  <v-card-title
              class="pa-1">
                Diseño y desarrollo Web
              <small class="mint--text mb-1">Desarrollo</small>
              </v-card-title>
              <v-card-text
                class="py-2"            
              >
                
                  <div>
                    <p class="mb-2">Leonardo ipsum dolor, sit amet consectetur adipisicing elit. Eius omnis minus voluptas consectetur obcaecati aperiam quasi earum adipisci provident in id, saepe amet assumenda quisquam.</p>
                  </div>
              </v-card-text>
              <v-divider class="mint mb-3" width=""></v-divider>

                  <div class="d-flex justify-end mr-2">
                    <v-btn
                      class=""
                      outlined
                      color=""
                      small
                      >Mas Informacion
                    </v-btn>
                  </div>

                </div>
            </v-card>
            </div>
          </v-col>

        </v-row>

      <!-- BTN Service -->
      <div class="btn-box px-16 py-3">

        <Modalsale color="mint" textBtn="Servicios"  :block="true"/>
      </div>

    </v-container>
    <!-- Main 03 Tu Proyecto -->
    <v-container class="projects primaryweb mb-5">
      <h2 class="pa-4 text-center">TU PROYECTO EN NUESTRAS MANOS</h2>
      <!-- part1 -->
      <v-row class="align-center py-3" no-gutters> 
        <v-col class="" cols="12" sm="6" md="4">
          <div class="d-flex justify-center">
              <v-img
                contain
                max-width="280"
                max-height="200"
                class=""
                src="img/web-design.png">
            </v-img>
          </div>
        </v-col>
        <v-col class=""  cols="12" sm="6" md="8"> 
          <div> 
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae perferendis quia possimus aperiam tenetur aspernatur sed minima tempore quisquam deleniti perspiciatis at optio necessitatibus mollitia consequatur earum aliquid, reiciendis, repellat voluptatem. Aliquam cumque perferendis quis harum nobis suscipit, illo error?</p>
          </div>
        </v-col>
        
      </v-row>
      <!-- part2 -->
      <v-row class="align-center py-3" no-gutters>
        <v-col class="order-2" cols="12" sm="6" md="8">
          <div> 
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae perferendis quia possimus aperiam tenetur aspernatur sed minima tempore quisquam deleniti perspiciatis at optio necessitatibus mollitia consequatur earum aliquid, reiciendis, repellat voluptatem. Aliquam cumque perferendis quis harum nobis suscipit, illo error?</p>
          </div>
        </v-col>
        <v-col cols="12" sm="6" md="4">
          <div class="d-flex justify-center">
              <v-img
              contain
              max-width="280"
              max-height="200"
              class=""
              src="img/responsive-design.png">
            </v-img>
          </div>
        </v-col>
      </v-row>
      <!-- part3 -->
      <v-row class="align-center py-3" no-gutters>
        <v-col class="" cols="12" sm="6" md="4">
          <div class="d-flex justify-center">
              <v-img
              contain
              max-width="280"
              max-height="200"
              class=""
              src="img/promocion.png">
            </v-img>
          </div>
        </v-col>
        <v-col class="" cols="12" sm="6" md="8">
          <div class=""> 
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vitae perferendis quia possimus aperiam tenetur aspernatur sed minima tempore quisquam deleniti perspiciatis at optio necessitatibus mollitia consequatur earum aliquid, reiciendis, repellat voluptatem. Aliquam cumque perferendis quis harum nobis suscipit, illo error?</p>
          </div>
        </v-col>
        
      </v-row>
    </v-container>

  <!-- Main 04 NOSOTROS -->
    <v-container class="about-box primaryweb mb-5">
      <div id="about__direct" class="d-inline-flex pa-4"><h2>¿Por qué <span class="naranja--text">D-Web</span>?</h2></div>
        
        <v-row class="align-center">
          <v-col cols="12" sm="5" md="6">
              <div class="px-2" >
                <p>Leonardo ipsum dolor sit amet consectetur adipisicing elit. Sit asperiores dolorem saepe pariatur a consequuntur, repellat cupiditate? Officia, voluptatum in?</p>

                <h3 class="naranja--text pt-2">¡Nuestro Propósito!</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus consequatur odio maxime autem temporibus impedit provident repellat repellendus, quod nisi?</p>
              </div>
          </v-col>
          <v-col class="pa-0" cols="12" sm="7" md="6">
            <div class="d-flex justify-center">
              <v-img
                contain
                max-width="380"
                min-height="100"
                src="">
              </v-img>
            </div>
          </v-col>
        </v-row>
      
          <h3 class="text-center pt-4 my-4">Nuestro punto de diferenciación debe ir en esta sección de etiqueta</h3>
          
        <v-container class="generated_value">
              <h3 class="naranja--text text-center py-3 ">ASÍ GENERAMOS VALOR</h3>

          <v-row class="align-center mx-5"> 
            <v-col :class="justifyC" cols="12" sm="4">
                <div>
                  <v-img max-width="200" contain src="img/DWeb_colaboracion.svg"></v-img>
                  <h4>Colaboración</h4>
                </div>
            </v-col>
            <v-col :class="justifyC" cols="12" sm="4">
                <div>
                  <v-img max-width="200" contain src="img/DWeb_creatividad.svg"></v-img>
                  <h4>Innovación</h4>
                </div>
            </v-col>
            <v-col :class="justifyC" cols="12" sm="4">
              <div>
                  <v-img max-width="200" src="img/DWeb_crecimiento.svg" contain></v-img>
                  <h4>Crecimiento</h4>
                </div>
            </v-col>
          </v-row>
        </v-container>
    </v-container>
  </div>
</template>

<script>
import Modalsale from '../components/Modalsale.vue'

export default {
  
  
  data (){
    return{
      justifyC: ['d-flex justify-center', 'text-center'], 
      
    }
  },

  head(){
    return{
      title: 'Inicio', 
      meta: [
        {
          hid:'description',
          name: 'description',
          content:'Pendiemte',
        }
      ]
      
    }
  },
  components: {
    Modalsale
          },

  methods:{
      
    },
}

</script>

<style>
  
  .projects p{
    font-size: 18px;
    margin-bottom: 0px;
    padding: 0px 12px;
  }

  .about-box p{
    font-size: 18px;
    margin-bottom: 8px;
  }
  .generated_value{
    max-width: 800px;
    min-height: 100px;
    margin-bottom: 8px;
    background-color: #333333;
    border: 2px solid #F7931E;
  }
  
</style>
