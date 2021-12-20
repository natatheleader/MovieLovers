import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Movies from '../views/Movies.vue'
import TvShows from '../views/TvShows.vue'
import Anime from '../views/Anime.vue'
// import About from '../views/About.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/movies',
    name: 'Movies',
    component: Movies
  },
  {
    path: '/tvShows',
    name: 'TvShows',
    component: TvShows
  },
  {
    path: '/anime',
    name: 'Anime',
    component: Anime
  },
  {
    // path: '/about',
    // name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    // component: About
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
