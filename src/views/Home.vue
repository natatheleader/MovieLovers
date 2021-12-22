<template>
  <div class="bg-primary h-full">
    <h3 class="text-white p-8 font-bold">Recent Movies</h3>
    <Card />
    <h3 class="text-white p-8 font-bold">Recent Shows</h3>
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
