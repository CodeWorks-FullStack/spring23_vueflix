import { createRouter, createWebHashHistory } from 'vue-router'
import { authGuard } from '@bcwdev/auth0provider-client'

function loadPage(page) {
  return () => import(`./pages/${page}.vue`)
}

// NOTE think of this as the 'App.js' file, but we are no longer registering controllers
// NOTE here we register the routes and pages of our application

const routes = [
  {
    path: '/',
    name: 'Home',
    component: loadPage('HomePage')
  },
  {
    path: '/about',
    name: 'About',
    component: loadPage('AboutPage')
  },
  {
    path: '/account',
    name: 'Account',
    component: loadPage('AccountPage'),
    beforeEnter: authGuard
  },
  {

    path: '/moviedetails/:movieId', //the route or endpoint of the URL; for unique routes, we handle that by creating a parameter indicated by the ':'
    name: 'MovieDetails', // name of the page in Vue Router
    component: loadPage('MovieDetailsPage') // the page component that I want to mount
  }
]

export const router = createRouter({
  linkActiveClass: 'router-link-active',
  linkExactActiveClass: 'router-link-exact-active',
  history: createWebHashHistory(),
  routes
})
