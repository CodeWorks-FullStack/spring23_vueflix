import { reactive } from 'vue'

// NOTE AppState is a reactive object to contain app level data
export const AppState = reactive({
  user: {},
  /** @type {import('./models/Account.js').Account} */
  account: {},

  /** @type {import('./models/Movie.js').Movie[]} */
  movies: [],

  /** @type {import('./models/Movie.js').Movie|null} */
  activeMovie: null,


  // NOTE save the current page in the appstate so I always know what page of results I am on
  currentPage: null,
  totalPages: null,

  query: null

})
