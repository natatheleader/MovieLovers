<template>
  <div>
    <hero @update:result='updated' :show_s="false"/>
    <div>
      <div class="bg-primary h-full" v-if="!hResult">
        <h1 class="text-white font-bold">Movie Lovers, Get Your Movies From Here.</h1>
        <h2 class="text-white p-8 font-bold">Trending Movies</h2>
        <div class="md:grid md:grid-cols-4 md:gap-2 sm:grid sm:grid-cols-2 sm:gap-1">
          <Card v-for="movie in movies" :key="movie.id" :id="movie.id" :image="movie.large_cover_image" :rating="movie.rating" :description="movie.description_full" :m_title="movie.title_long" />
        </div>
        <h2 class="text-white p-8 font-bold">Most Downloaded Movies</h2>
        <div class="md:grid md:grid-cols-4 md:gap-2 sm:grid sm:grid-cols-2 sm:gap-1">
          <Card v-for="movie in m_movies" :key="movie.id" :id="movie.id" :image="movie.large_cover_image" :rating="movie.rating" :description="movie.description_full" :m_title="movie.title_long" />
        </div>
        <h2 class="text-white p-8 font-bold">Most Liked Movies</h2>
        <div class="md:grid md:grid-cols-4 md:gap-2 sm:grid sm:grid-cols-2 sm:gap-1">
          <Card v-for="movie in l_movies" :key="movie.id" :id="movie.id" :image="movie.large_cover_image" :rating="movie.rating" :description="movie.description_full" :m_title="movie.title_long" />
        </div>
        <h2 class="text-white p-8 font-bold">Best Rated Movies</h2>
        <div class="md:grid md:grid-cols-4 md:gap-2 sm:grid sm:grid-cols-2 sm:gap-1">
          <Card v-for="movie in r_movies" :key="movie.id" :id="movie.id" :image="movie.large_cover_image" :rating="movie.rating" :description="movie.description_full" :m_title="movie.title_long" />
        </div>
        <div class="py-8 grid place-content-center">
          <router-link class="bg-secondary hover:bg-red-900 text-white font-bold py-4 px-4 rounded" to="/movies">All Movies</router-link>
        </div>
      </div>
      <div class="bg-primary h-full" v-else>
        <h2 class="text-white p-8 font-bold">Results</h2>
        <div class="md:grid md:grid-cols-4 md:gap-2 sm:grid sm:grid-cols-2 sm:gap-1">
          <Card v-for="movie in hSearched" :key="movie.id" :id="movie.id" :image="movie.large_cover_image" :rating="movie.rating" :description="movie.description_full" :m_title="movie.title_long" />
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
  props: ['result', 'searched'],
  components: {
    Card,
    Hero
  },
  data () {
    return {
      movies: [],
      hSearched: [],
      hResult: false,
      status: false,
      status_message: '',
      total_movies: 0,
      m_movies: [],
      m_status: false,
      m_status_message: '',
      m_total_movies: 0,
      l_movies: [],
      l_status: false,
      l_status_message: '',
      l_total_movies: 0,
      r_movies: [],
      r_status: false,
      r_status_message: '',
      r_total_movies: 0
    }
  },
  created () {
    axios.get('https://yts.mx/api/v2/list_movies.json?limit=8').then(response => {
      this.movies = response.data.data.movies
      this.status = response.data.status
      this.status_message = response.data.status_message
      this.total_movies = response.data.data.movie_count
    }).catch(error => {
      console.log('There is an Error : ' + error.response)
    })

    axios.get('https://yts.mx/api/v2/list_movies.json?limit=8&sort_by=download_count').then(response => {
      this.m_movies = response.data.data.movies
      this.m_status = response.data.status
      this.m_status_message = response.data.status_message
      this.m_total_movies = response.data.data.movie_count
    }).catch(error => {
      console.log('There is an Error : ' + error.response)
    })

    axios.get('https://yts.mx/api/v2/list_movies.json?limit=8&sort_by=like_count').then(response => {
      this.l_movies = response.data.data.movies
      this.l_status = response.data.status
      this.l_status_message = response.data.status_message
      this.l_total_movies = response.data.data.movie_count
    }).catch(error => {
      console.log('There is an Error : ' + error.response)
    })

    axios.get('https://yts.mx/api/v2/list_movies.json?limit=8&sort_by=rating').then(response => {
      this.r_movies = response.data.data.movies
      this.r_status = response.data.status
      this.r_status_message = response.data.status_message
      this.r_total_movies = response.data.data.movie_count
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
