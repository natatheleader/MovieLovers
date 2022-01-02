<template>
  <div class="bg-gradient-to-b from-primary via-secondary to-primary h-80">
    <div>
      <!-- nav -->
      <div id="nav" class="text-center">
        <router-link class="p-5 bold decoration-red-50 text-white hover:underline" to="/">Home</router-link>
        <router-link class="p-5 bold decoration-red-50 text-white hover:underline" to="/movies">Movies</router-link>
        <router-link class="p-5 bold decoration-red-50 text-white hover:underline" to="/tvShows">TvShows</router-link>
        <router-link class="p-5 bold decoration-red-50 text-white hover:underline" to="/anime">Anime</router-link>
      </div>
    </div>

    <div class="mt-12 grid place-content-center">
      <input class="rounded-3xl w-full px-24 py-2" type="search" name="search" placeholder="Search" />
    </div>

    <div class="mt-12 grid place-content-center">
      <img src="../assets/Logo/logo.png" alt="Logo" />
    </div>

  </div>
</template>

<script>
export default {
  name: 'Hero'
}
</script>
