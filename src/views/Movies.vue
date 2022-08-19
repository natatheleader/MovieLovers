<template>
  <div>
    <hero @update:result='updated' :show_s="false"/>
    <div>
      <div class="bg-primary h-full">
        <h3 class="text-white p-8 font-bold">All Movies</h3>
        <div v-if="!hResult" class="md:grid md:grid-cols-4 md:gap-2 sm:grid sm:grid-cols-2 sm:gap-1">
          <Card v-for="movie in movies" :key="movie.id" :id="movie.id" :image="movie.large_cover_image" :rating="movie.rating" :description="movie.description_full" :m_title="movie.title_long" />
        </div>
        <div v-else class="md:grid md:grid-cols-4 md:gap-2 sm:grid sm:grid-cols-2 sm:gap-1">
          <Card v-for="movie in hSearched" :key="movie.id" :id="movie.id" :image="movie.large_cover_image" :rating="movie.rating" :description="movie.description_full" :m_title="movie.title_long" />
        </div>

        <div v-if="!hResult" class="pb-8 px-8 sm:px-2">
          <VueTailwindPagination
            :current="currentPage"
            :total="total"
            :per-page="perPage"
            @page-changed="onPageClick($event)"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from '@/components/card.vue'
import axios from 'axios'
import '@ocrv/vue-tailwind-pagination/dist/style.css'
import VueTailwindPagination from '@ocrv/vue-tailwind-pagination'
import Hero from '@/components/hero.vue'

export default {
  name: 'app',
  props: ['result', 'searched'],
  components: {
    Card,
    VueTailwindPagination,
    Hero
  },
  data () {
    return {
      hSearched: [],
      hResult: false,
      currentPage: 1,
      perPage: 16,
      total: 100,
      movies: [],
      status: false,
      status_message: ''
    }
  },
  methods: {
    onPageClick (event) {
      this.currentPage = event
      this.getData(this.currentPage)
    },
    async getData (pageNumber) {
      await axios.get(`https://yts.mx/api/v2/list_movies.json?sort=date&limit=16&page=${pageNumber}`).then(response => {
        this.status = response.data.status
        this.status_message = response.data.status_message
        var responseData = response.data.data
        this.currentPage = responseData.page_number
        this.total = responseData.movie_count
        this.movies = responseData.movies
      }).catch(error => {
        console.log('There is an Error : ' + error.response)
      })
    },
    updated: function (result, searched) {
      this.hResult = result
      this.hSearched = searched
    }
  },
  mounted () {
    this.currentPage = 1
    this.getData(this.currentPage)
  }
}
</script>
