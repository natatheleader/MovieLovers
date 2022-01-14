<template>
  <div>
    <div class="bg-gradient-to-b from-primary via-secondary to-primary">
      <div id="nav" class="text-center">
        <router-link class="p-5 bold decoration-red-50 text-white hover:underline" active-class="decoration-red-50 underline" to="/">Home</router-link>
        <router-link class="p-5 bold decoration-red-50 text-white hover:underline" active-class="decoration-red-50 underline" to="/movies">Movies</router-link>
        <!-- <router-link class="p-5 bold decoration-red-50 text-white hover:underline" to="/tvShows">TvShows</router-link>
        <router-link class="p-5 bold decoration-red-50 text-white hover:underline" to="/anime">Anime</router-link> -->
      </div>
      <div>
        <div class="grid place-content-center py-4">
          <img src="../assets/Logo/logo.png" alt="Logo" />
        </div>
        <div class="sm:flex sm:flex-row p-8">
          <div>
            <img class="sm:h-80 rounded-lg" :src=movie.large_cover_image alt="Image Cover">
          </div>
          <div class="text-white m-8">
            <p class="text-sm">Movie Title</p>
            <h1 class="font-bold">{{ movie.title_long }}</h1>
            <p class="text-sm">Geners</p>
            <div class="flex">
              <p v-for="gen in genres" v-bind:key="gen" class="text-lg">{{ gen + ' | ' }}</p>
            </div>
            <p class="text-sm">Rating</p>
            <p><span class="text-lg font-bold">{{ movie.rating }}</span> / 10 </p>

            <ul class="flex flex-wrap">
              <li v-for="torrent in movie.torrents" v-bind:key="torrent.url">
                <button class="m-4 bg-secondary rounded-full px-6 border-solid border-white border-2"><a :href=torrent.url>
                  <span class="flex">{{ torrent.quality }}
                    <svg class="h-8 w-8 text-white"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M4 17v2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-2" />  <polyline points="7 11 12 16 17 11" />  <line x1="12" y1="4" x2="12" y2="16" /></svg>
                  </span>
                  <span class="text-xs">{{ torrent.size + ' ' + torrent.type}}</span>
                </a></button>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <div class="bg-primary py-4">
      <h3 class="text-white p-8 font-bold">Trailer</h3>
      <div class="flex flex-wrap px-8">
        <iframe :src=yt_trailer width="400" height="200" frameborder="0" allowfullscreen></iframe>
        <img class="w-70 h-40 m-4" :src=movie.large_screenshot_image1 alt="trailer">
        <img class="w-70 h-40 m-4" :src=movie.large_screenshot_image2 alt="trailer">
        <img class="w-70 h-40 m-4" :src=movie.large_screenshot_image3 alt="trailer">
      </div>

      <h3 class="text-white pt-8 px-8 pb-4 font-bold">Synopsis</h3>
      <div class="text-white px-8">
        <p>{{ movie.description_full }}</p>
      </div>

      <h3 class="text-white pt-8 px-8 pb-4 font-bold">Cast</h3>
      <div class="flex flex-wrap px-8">
        <div class="text-white px-5" v-for="cast in casts" v-bind:key="cast.name">
          <img class="w-20 h-20 m-4 rounded-full" :src=cast.url_small_image alt="Actor">
          <p class="font-bold text-lg">{{ cast.name }}</p>
        </div>
      </div>

      <h3 class="text-white pt-8 px-8 pb-4 font-bold">Similar Movies</h3>
      <div class="md:grid md:grid-cols-4 md:gap-2 sm:grid sm:grid-cols-2 sm:gap-1">
        <Card v-for="movie in related" :key="movie.id" :id="movie.id" :image="movie.medium_cover_image" :rating="movie.rating" :description="movie.description_full" :m_title="movie.title_long" />
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/card.vue'
import axios from 'axios'

export default {
  components: {
    Card
  },
  data () {
    return {
      movie: [],
      related: [],
      genres: [],
      casts: [],
      yt_trailer: '',
      status: false,
      status_message: '',
      r_status: false,
      r_status_message: '',
      r_total_movies: 0
    }
  },
  methods: {
    onCardClick (event) {
      this.id = event
      this.getData(this.id)
    },
    async getData (id) {
      await axios.get(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}&with_images=true&with_cast=true`).then(response => {
        this.movie = response.data.data.movie
        this.genres = this.movie.genres
        this.status = response.data.status
        this.status_message = response.data.status_message
        this.yt_trailer = 'http://www.youtube.com/embed/' + response.data.data.movie.yt_trailer_code
        this.casts = response.data.data.movie.cast
      }).catch(error => {
        console.log('There is an Error : ' + error.response)
      })
      await axios.get(`https://yts.mx/api/v2/movie_suggestions.json?movie_id=${id}`).then(response => {
        this.related = response.data.data.movies
        this.r_status = response.data.status
        this.r_status_message = response.data.status_message
        this.r_total_movies = response.data.data.movie_count
      }).catch(error => {
        console.log('There is an Error : ' + error.response)
      })
    }
  },
  mounted () {
    this.id = this.$route.params.id
    this.getData(this.id)
  },
  watch: {
    '$route.params.id' (newId, oldId) {
      this.getData(newId)
    }
  }

}
</script>
