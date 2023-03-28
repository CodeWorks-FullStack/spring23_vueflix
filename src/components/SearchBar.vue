<template>
    <!-- NOTE v-model binds the value of the input to the value of the ref (placeholder) object -->
    <form @submit.prevent="searchMovies()">
    <input type="text" v-model="editable.query" class="col-8" id="search">
    <button type="submit"><i class="mdi mdi-magnify"></i></button>
    </form>
</template>


<script>
import { ref } from 'vue';
import { logger } from '../utils/Logger.js';
import { moviesService } from '../services/MoviesService.js';

export default {
    setup() {
// NOTE ref serves as a placeholder for saving values
        const editable = ref({})

return {
    editable,

    async searchMovies() {
    try {
        const query = editable.value
        logger.log(query)
        await moviesService.searchMovies(query)
    } catch (error) {
        logger.log(error.message)
    }
    }
            
  };
},
};
</script>
<style>
</style>