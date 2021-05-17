<template>
    <div class="">
            <v-carousel
                cycle
                height="400"
                hide-delimiter-background
                show-arrows-on-hover
    >
        <v-carousel-item
            v-for="(slide, i) in slides"
            :key="i"
        >
        <v-sheet
            :color="colors[i]"
            height="100%"
        >
            <v-row
                class="fill-height"
                align="center"
                justify="center"
            >
            <div>
                <h4>{{ slide }} Slide</h4>
            </div>
            </v-row>
        </v-sheet>
        </v-carousel-item>
    </v-carousel>
        
    </div>
</template>

<script>
export default {
        data () {
        return {
            colors: [
                'primaryweb',
                'dark',
                'naranja'

            ],
            slides: [
                'Primary',
                'Dark',
                'Naranja'
            ],
        }
        },
}
</script>

<style>

</style>