<template>
  <div>
    <hero />
    <div>
      <div class="bg-primary h-full">
        <h3 class="text-white p-8 font-bold">All Movies</h3>
        <div class="grid grid-cols-4 gap-2">
          <Card v-for="movie in movies" :key="movie.id" :id="movie.id" :image="movie.large_cover_image" :rating="movie.rating" :description="movie.description_full" :m_title="movie.title_long" />
        </div>

        <div class="pb-8">
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
  components: {
    Card,
    VueTailwindPagination,
    Hero
  },
  data () {
    return {
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
    }
  },
  mounted () {
    this.currentPage = 1
    this.getData(this.currentPage)
  }
}
</script>
