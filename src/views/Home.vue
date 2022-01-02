<template>
  <div>
    <hero />
    <div>
      <div class="bg-primary h-full">
        <h3 class="text-white p-8 font-bold">Trending Movies</h3>
        <div class="grid grid-cols-4 gap-2">
          <Card v-for="movie in movies" :key="movie.id" :id="movie.id" :image="movie.large_cover_image" :rating="movie.rating" :description="movie.description_full" :m_title="movie.title_long" />
        </div>
        <div class="mt-8 grid place-content-center">
          <router-link class="bg-secondary hover:bg-red-900 text-white font-bold py-4 px-4 rounded" to="/movies">All Movies</router-link>
        </div>
        <h3 class="text-white p-8 font-bold">Trending Shows</h3>
        <div class="grid grid-cols-3 gap-3">
          <Card />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/card.vue'
import axios from 'axios'
import Hero from '@/components/hero.vue'

export default {
  name: 'app',
  components: {
    Card,
    Hero
  },
  data () {
    return {
      movies: [],
      status: false,
      status_message: '',
      total_movies: 0
    }
  },
  created () {
    axios.get('https://yts.mx/api/v2/list_movies.json?limit=16').then(response => {
      this.movies = response.data.data.movies
      this.status = response.data.status
      this.status_message = response.data.status_message
      this.total_movies = response.data.data.movie_count
    }).catch(error => {
      console.log('There is an Error : ' + error.response)
    })
    axios.get('https://oneom.is/serial/9', {
      headers: {
        Accepts: 'Application/json'
      }
    }).then(response => {
      console.log(response.data)
    }).catch(error => {
      console.log('There is an Error : ' + error.response)
    })
  }
}
</script>
