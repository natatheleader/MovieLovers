<template>
  <div>
    <hero @update:result='updated' :show_s="true" />
    <div>
      <div class="bg-primary h-full">
        <h3 class="text-white p-8 font-bold">Browse Movies</h3>
        <browse @update:result='updated'/>
        <div v-if="!hResult" class="md:grid md:grid-cols-4 md:gap-2 sm:grid sm:grid-cols-2 sm:gap-1">
          <Card v-for="movie in movies" :key="movie.id" :id="movie.id" :image="movie.large_cover_image" :rating="movie.rating" :description="movie.description_full" :m_title="movie.title_long" />
        </div>
        <div v-else class="md:grid md:grid-cols-4 md:gap-2 sm:grid sm:grid-cols-2 sm:gap-1">
          <Card v-for="movie in hSearched" :key="movie.id" :id="movie.id" :image="movie.large_cover_image" :rating="movie.rating" :description="movie.description_full" :m_title="movie.title_long" />
        </div>
        <div class="py-8 grid place-content-center">
          <router-link class="bg-secondary hover:bg-red-900 text-white font-bold py-4 px-4 rounded" to="/movies">All Movies</router-link>
        </div>
        <!-- <h3 class="text-white p-8 font-bold">Trending Shows</h3>
        <div class="lg:grid lg:grid-cols-3 lg:gap-3">
          <Card />
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/card.vue'
import axios from 'axios'
import Hero from '@/components/hero.vue'
import Browse from '@/components/browse.vue'

export default {
  name: 'app',
  props: ['result', 'searched'],
  components: {
    Card,
    Hero,
    Browse
  },
  data () {
    return {
      movies: [],
      hSearched: [],
      hResult: false,
      status: false,
      status_message: '',
      total_movies: 0,
      show: true
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
    // axios.get('https://oneom.is/serial/9', {
    //   headers: {
    //     Accepts: 'Application/json'
    //   }
    // }).then(response => {
    //   console.log(response.data)
    // }).catch(error => {
    //   console.log('There is an Error : ' + error.response)
    // })
  },
  methods: {
    updated: function (result, searched) {
      this.hResult = result
      this.hSearched = searched
    }
  }
}
</script>
