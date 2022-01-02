import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Movies from '../views/Movies.vue'
import TvShows from '../views/TvShows.vue'
import Anime from '../views/Anime.vue'
import MovieDetail from '../views/MovieDetails.vue'

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
    path: '/detail/:id',
    name: 'MovieDetail',
    component: MovieDetail
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
