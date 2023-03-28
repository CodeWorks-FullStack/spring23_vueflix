import Axios from 'axios'
import { baseURL } from '../env'
export const api = Axios.create({
  baseURL,
  timeout: 8000
})


export const movieApi = Axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
  timeout: 8000,
  params:
  {
    api_key: '545c6ef058e65396849dfbbf381cbca3',
    include_adult: false,
    certification_country: 'US',
    'certification.lte': 'PG-13',
    'certification.gte': 'G'
  }
})