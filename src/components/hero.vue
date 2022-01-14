<template>
  <div class="bg-gradient-to-b from-primary via-secondary to-primary h-80">
    <div>
      <!-- nav -->
      <div id="nav" class="text-center">
        <router-link class="p-5 bold decoration-red-50 text-white hover:underline" active-class="decoration-red-50 underline" to="/">Home</router-link>
        <router-link class="p-5 bold decoration-red-50 text-white hover:underline" active-class="decoration-red-50 underline" to="/movies">Movies</router-link>
        <!-- <router-link class="p-5 bold decoration-red-50 text-white hover:underline" to="/tvShows">TvShows</router-link>
        <router-link class="p-5 bold decoration-red-50 text-white hover:underline" to="/anime">Anime</router-link> -->
      </div>
    </div>

    <div class="mt-12 grid place-content-center">
      <input class="rounded-3xl w-full px-24 py-2" type="text" name="search" placeholder="Search" v-on:keyup="searchMonitor" v-model="search.keyword" />
    </div>

    <div class="mt-12 grid place-content-center">
      <img src="../assets/Logo/logo.png" alt="Logo" />
    </div>

  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'Hero',
  data () {
    return {
      searched: [],
      search: { keyword: '' },
      result: false
    }
  },
  methods: {
    searchMonitor: function () {
      axios.get(`https://yts.mx/api/v2/list_movies.json?query_term=${this.search.keyword}`).then(response => {
        this.searched = response.data.data.movies

        if (response.data.data.movie_count > 0) {
          this.result = true
        } else {
          this.result = false
        }
        this.$emit('update:result', this.result, this.searched)
      })
    }
  }

}
</script>
