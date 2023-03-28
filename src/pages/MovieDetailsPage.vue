<template>
<div class="container-fluid movie-bg">
    <section class="row justify-content-center align-items-center "  >
        <div class="col-9 pt-5">
            <div class="details-card p-3">
                <h1>{{movie?.title}}</h1>
                <h3>{{movie?.release_date}}</h3>
                <p>{{movie?.description}}</p>
                <p>Average Rating: {{movie?.vote_avg}}</p>
            </div>
        </div>
    </section>
</div>

</template>


<script>
import { computed, onMounted } from 'vue';
import { useRoute } from 'vue-router';
import { moviesService } from '../services/MoviesService.js';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js';
export default {
    setup() {
        // NOTE useRoute() allows me to access the route of the current page I am on
const route = useRoute()

async function getMovieById() {
    try {
        const movieId = route.params.movieId // pull the movieId from the route.params
        // logger.log('movieId', movieId)
        await moviesService.getMovieById(movieId)
    } catch (error) {
        logger.log(error.message)
    }
        }

        onMounted(() => {
            getMovieById()
        })

return {
    route,

    movie: computed(() => AppState.activeMovie),
    backgroundImg: computed(()=>`url(${AppState.activeMovie?.backdropImg})`)
  };
},
};
</script>
<style>

.details-card{
    background-color: #39393966;
    backdrop-filter: blur(5px);
    border-radius: 5px;
    border: 2px solid #bfbfbf;
}

.movie-bg{
    background-image: v-bind(backgroundImg);
    background-position: center;
    background-size: cover;
    min-height: 92.5vh;
}

</style>