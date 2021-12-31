<template>
  <div class="bg-primary h-full">
    <h3 class="text-white p-8 font-bold">Trending Movies</h3>
    <div class="grid grid-cols-3 gap-3">
      <Card v-for="movie in movies" :key="movie.id" :image="movie.background_image" :rating="movie.rating" :description="movie.description_full" :m_title="movie.title_long" />
    </div>
    <h3 class="text-white p-8 font-bold">Trending Shows</h3>
    <div class="grid grid-cols-3 gap-3">
      <Card />
    </div>
  </div>
</template>

<script>
import Card from '@/components/card.vue'
import axios from 'axios'

export default {
  name: 'app',
  components: {
    Card
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
    axios.get('https://yts.mx/api/v2/list_movies.json?limit=9').then(response => {
      this.movies = response.data.data.movies
      this.status = response.data.status
      this.status_message = response.data.status_message
      this.total_movies = response.data.data.movie_count
    }).catch(error => {
      console.log('There is an Error : ' + error.response)
    })
  }
}
</script>
