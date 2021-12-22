<template>
  <div class="bg-primary h-full">
    <h3 class="text-white p-8 font-bold">Trending Movies</h3>
    <div class="flex flex-row flex-wrap">
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
      <Card />
    </div>
    <h3 class="text-white p-8 font-bold">Trending Shows</h3>
    <Card />
  </div>
</template>

<script>
import Card from '@/components/card.vue'

export default {
  name: 'app',
  components: {
    Card
  }
}
</script>
