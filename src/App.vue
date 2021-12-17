<template>
<div>
  <div>
    <!-- sidebar -->
  </div>

  <div>
    <!-- main -->
    <div class="">
      <div>
        <!-- nav -->
        <div id="nav" class="text-center">
          <router-link class="p-5 bold decoration-red-50 text-white hover:underline" to="/">Home</router-link>
          <router-link class="p-5 bold decoration-red-50 text-white hover:underline" to="/movies">Movies</router-link>
          <router-link class="p-5 bold decoration-red-50 text-white hover:underline" to="/tvShows">TvShows</router-link>
          <router-link class="p-5 bold decoration-red-50 text-white hover:underline" to="/anime">Anime</router-link>
        </div>
      </div>

      <div>
        <!-- img -->
      </div>

      <div>
        <!-- search -->
      </div>
    </div>

    <div>
      <!-- routerView -->
      <router-view/>
    </div>
  </div>

  <div>
    <!-- sidebar -->
  </div>
</div>  
</template>
