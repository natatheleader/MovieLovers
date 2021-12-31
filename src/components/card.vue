<template>
  <div class="m-5 text-white">
    <div class="h-64 min-w-min bg-secondary relative rounded-lg">
      <img class="h-full w-full rounded-lg" src="https://m.media-amazon.com/images/M/MV5BOTk5ODg0OTU5M15BMl5BanBnXkFtZTgwMDQ3MDY3NjM@._V1_QL50_SY1000_CR0,0,674,1000_AL_.jpg" />
      <div class="bg-black bg-opacity-50 absolute inset-x-0 bottom-0 rounded-b-lg">
        <div class="m-1">
          <p class="text-base font-bold">{{ t_title }}</p>
          <p class="">{{ description }}</p>
          <ul class="flex justify-center">
            <li><i class="fas fa-star fa-sm text-yellow-500 mr-1"></i></li>
            <li><i class="fas fa-star fa-sm text-yellow-500 mr-1"></i></li>
            <li><i class="fas fa-star fa-sm text-yellow-500 mr-1"></i></li>
            <li><i class="far fa-star fa-sm text-yellow-500 mr-1"></i></li>
            <li><i class="far fa-star fa-sm text-yellow-500 mr-1"></i></li>
            <p> {{ rating }}</p>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['m_title', 'description', 'rating', 'image'],
  name: 'Card',
  created () {
    console.log(this.movie)
  }
}
</script>
