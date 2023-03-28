import { AppState } from "../AppState.js"
import { Movie } from "../models/Movie.js"
import { logger } from "../utils/Logger.js"
import { movieApi } from "./AxiosService.js"

class MoviesService {

    async getMovies() {
        const res = await movieApi.get('discover/movie')
        logger.log('[GETTING MOVIES]', res.data)
        AppState.movies = res.data.results.map(m => new Movie(m))
        AppState.currentPage = res.data.page //save the current page so I know what page of results the API returned
        AppState.totalPages = res.data.total_pages
    }

    async getMovieById(movieId) {
        const res = await movieApi.get(`movie/${movieId}`)
        logger.log('[GET MOVIE BY ID]', res.data)
        AppState.activeMovie = new Movie(res.data)
    }

    async searchMovies(query) {
        // debugger
        // NOTE if we want to provide an additional query, axios expects it to be formated as a 'params' object
        const res = await movieApi.get('search/movie', { params: query })
        logger.log('[SEARCH MOVIES]', res.data)
        AppState.query = query.query //save the query in the appstate to support pagination of search results
        AppState.movies = res.data.results.map(m => new Movie(m))
        AppState.currentPage = res.data.page //save the current page so I know what page of results the API returned
        AppState.totalPages = res.data.total_pages
    }

    async changePage() {
        const page = AppState.currentPage // current page from appstate
        const query = AppState.query // grab the query that we saved in our searchMovies method
        const endpoint = query ? 'search' : 'discover' // if there's a query, make the req to the search endpoint, otherwise make the req to the entire API
        const res = await movieApi.get(`${endpoint}/movie`, { params: { page, query } }) // send in the page number to get the next page of results and provide query if any
        logger.log('[CHANGE PAGE]', res.data)
        AppState.movies = res.data.results.map(m => new Movie(m))
    }


}

export const moviesService = new MoviesService()