<template>
    <div>
        <div class="primaryweb px-3" > 
            <div class="py-2 text-center">
                <h2 class="naranja--text ">Formulario de Contacto</h2>
                
            </div>
            <div>
                <v-form> 
                <!-- INPUT NAME BUSINESS-->
                <v-text-field
                    background-color="dark"
                    dense
                    color="mint"
                    type="text"
                    label="Nombre / Empresa"
                    outlined
                    placeholder="Ingresar nombre de Empresa"
                ></v-text-field>
                <!-- INPUT ACTIVITY -->
                <v-combobox
                    :items="activity"
                    clearable
                    
                    background-color="dark"
                    color="mint"
                    item-color="mint"
                    label="Actividad de la Empresa"
                    placeholder="Seleccionar actividad"
                    multiple
                    outlined
                    dense
                    />
                <!-- INPUT NAME CONTACT-->
                <v-text-field
                    background-color="dark"
                    dense
                    color="mint"
                    type="text"
                    label="Nombre del contacto"
                    outlined
                    placeholder="¿Cuál es tu nombre?"
                ></v-text-field>
                <!-- INPUT MAIL-->
                <v-text-field
                    background-color="dark"
                    dense
                    color="mint"
                    type="email"
                    label="Correo electrónico"
                    outlined
                    placeholder="Ingresar correo"
                ></v-text-field>
                <!-- INPUT PHONE -->
                <v-text-field
                    background-color="dark"
                    dense
                    color="mint"
                    type=""
                    label="Contacto Telefónico"
                    outlined
                    placeholder="Ingresa tu número"
                ></v-text-field>
                <!-- END IMPUT -->
                <!-- INPUT SELECTION SERVICES-->
                <div class="pb-1">
                    <h3>Categoría de servicios</h3>
                    <strong class="naranja--text">¡Puedes seleccionar los que desees!</strong>
                    <!-- TAG 01 -->
                    <v-list-group
                        :value="false"
                        no-action
                        sub-group
                        >
                        <template v-slot:activator>
                            <v-list-item-content>
                            <v-list-item-title>DESARROLLO WEB</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(item, index) in servicesmark" :key="index">
                            <v-checkbox 
                                :label="item.name"
                                :color="item.color"
                                hide-details
                            />
                        </v-list-item>
                </v-list-group>
                <!-- TAG 02 -->
                    <v-list-group
                        :value="false"
                        no-action
                        sub-group
                        >
                        <template v-slot:activator>
                            <v-list-item-content>
                            <v-list-item-title>MARKETING DIGITAL</v-list-item-title>
                            </v-list-item-content>
                        </template>
                        <v-list-item v-for="(item, index) in servicesdev" :key="index">
                            <v-checkbox 
                                :label="item.name"
                                :color="item.color"
                                hide-details
                            />
                        </v-list-item>
                </v-list-group>
                </div>
                <!-- END SELECTIONS -->
                <v-divider class="mint"></v-divider>
                <div class="d-flex justify-center  py-4">
                    <v-btn color="mint">Enviar</v-btn>
                </div>
            </v-form>
            </div>
            
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
            activity: [ 'Producción', 'Comercial', 'Servicios', 'Mixta'],
            servicesdev:[
                {name:'Servicio 1', color:'mint'},
                {name:'Servicio 2', color:'mint'},
                {name:'Servicio 3', color:'mint'},
            ],
            servicesmark:[
                {name:'Servicio 1', color:'mint'},
                {name:'Servicio 2', color:'mint'},
                {name:'Servicio 3', color:'mint'},
            ],


        }
    }
}
</script>

<style> 
    
</style>