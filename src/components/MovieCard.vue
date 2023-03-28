<template>
    <!-- NOTE router link is vue's fancy link tag....take me TO this page -->
<router-link :to="{name: 'MovieDetails', params:{movieId:movieProp.id}}" >
    <img class="img-fluid elevation-5 rounded movie-card" :src="movieProp?.posterImg" :alt="movieProp?.title">
    </router-link>
</template>


<script>
import { Movie } from '../models/Movie.js';

export default {
    props: {
        movieProp: {type: Movie, required:true}
    },
    setup() {
        return {};
    },
};
</script>
<style> 
</style>