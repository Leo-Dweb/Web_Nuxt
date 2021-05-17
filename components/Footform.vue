<template>
    <div>
        <v-footer class="py-4" color="darkfoot">
            <v-row class="align-center">
                <v-col cols="12">
                    <div class="d-flex justify-center">
                        <h3>Redes sociales</h3>
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
export default {
    data(){
        return{
            año: new Date().getFullYear()
        }
    }
}
</script>

<style>

</style>