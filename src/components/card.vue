<template>
  <div class="m-5 text-white">
    <router-link :to='"/detail/" + id'>
      <div class="min-w-min bg-secondary relative rounded-lg">
        <img class="h-full w-full rounded-lg" :src=image />
        <div class="bg-black bg-opacity-50 absolute inset-x-0 bottom-0 rounded-b-lg py-2">
          <div class="m-1">
            <p class="text-base font-bold">{{ m_title}}</p>
            <p v-snip="2"> {{ description }}</p>
            <ul class="flex justify-center">
              <li v-for="(index) in Math.round(rating/2)" v-bind:key="index"><i class="fas fa-star fa-sm text-yellow-500 mr-1"></i></li>
              <li v-for="(index) in (5 - Math.round(rating/2))" v-bind:key="index"><i class="far fa-star fa-sm text-yellow-500 mr-1"></i></li>
              <!-- <li><i class="fas fa-star fa-sm text-yellow-500 mr-1"></i></li>
              <li><i class="fas fa-star fa-sm text-yellow-500 mr-1"></i></li>
              <li><i class="far fa-star fa-sm text-yellow-500 mr-1"></i></li>
              <li><i class="far fa-star fa-sm text-yellow-500 mr-1"></i></li> -->
              <p class="text-sm"> {{ rating }} / 10</p>
            </ul>
          </div>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
export default {
  props: ['m_title', 'description', 'rating', 'image', 'id'],
  name: 'Card'
}
</script>
