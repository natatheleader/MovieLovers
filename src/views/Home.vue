<template>
  <div>
    <h3>Recent Movies</h3>
    <Card />
    <h3>Recent Shows</h3>
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
