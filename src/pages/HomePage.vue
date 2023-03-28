<template>
<div class="container-fluid">
  <!-- SECTION search bar -->
  <section class="row justify-content-center p-3">
   <SearchBar/>
  </section>

  <section class="row">
    <h1 class="text-center pb-2">Page {{currentPage}} of {{totalPages}} Pages</h1>
    <div class="col-6 text-end">
      <button class="btn btn-outline-danger" :disabled="currentPage==1"  @click="changePage('decrease')">Previous Page</button></div>
    <div class="col-6"><button class="btn btn-outline-danger" :disabled="currentPage ==totalPages" @click="changePage('increase')">Next Page</button></div>
  </section>

  <!-- SECTION movie cards -->
  <section class="row p-3">
    <!-- NOTE iterate over the data in the AppState -->
<div class="col-12 col-md-3 my-4" v-for="movieFromVFor in movies" :key="movieFromVFor.id">
  <!-- NOTE bind the prop from the child component, and pass in the data from the AppState -->
 <MovieCard :movieProp="movieFromVFor"/>
</div>
  </section>


</div>
</template>


<script>
import { onMounted, computed } from 'vue';
import { moviesService } from '../services/MoviesService.js';
import { logger } from '../utils/Logger.js';
import { AppState } from '../AppState.js';
import MovieCard from '../components/MovieCard.vue';

export default {
    setup() {
        // NOTE anon functions, calls to the service for 'getting' data will go here
        // NOTE lifecycle hooks: onMounted, watchEffect will be declared here
        async function getMovies() {
            try {
                // logger.log('getting movies on home page')
                await moviesService.getMovies();
            }
            catch (error) {
                logger.log(error.message);
            }
        }
        onMounted(() => {
            // NOTE in here I can put all of the functions that I want to call when this component (page) mounts
            getMovies();
        });
        return {
            // NOTE when using props; call to the AppState on parent component
          movies: computed(() => AppState.movies),
          currentPage: computed(() => AppState.currentPage),
          totalPages: computed(() => AppState.totalPages),

          async changePage(pageChange) {
            try {
              // logger.log('change page')
              if (pageChange == 'increase') {
                AppState.currentPage++
              }
              if (pageChange == 'decrease') {
  AppState.currentPage--
}
              await moviesService.changePage()
            } catch (error) {
              logger.log(error.message)
            }
          }
        };
    },
    components: { MovieCard }
}
</script>

<style scoped lang="scss">
.home {
  display: grid;
  height: 80vh;
  place-content: center;
  text-align: center;
  user-select: none;

  .home-card {
    width: 50vw;

    >img {
      height: 200px;
      max-width: 200px;
      width: 100%;
      object-fit: contain;
      object-position: center;
    }
  }
}

.movie-card{
  cursor: pointer;
}

.movie-card:hover{
  transform: scale(1.05);
  
}

</style>
