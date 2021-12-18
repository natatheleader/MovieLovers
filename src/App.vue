<template>
    <div>
        <div class="grid grid-cols-5">
            <aside class="bg-gray-700 h-screen">
                <!-- sidebar -->
                <SideNav />
            </aside>

            <div class="col-span-3">
                <!-- main -->
                <div class="bg-red-600 h-2/5">
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
                        <img src="/assets/logo.png" alt="Logo" />
                    </div>

                    <div class="mt-12 grid place-content-center">
                        <input class="rounded-3xl w-full px-24 py-2" type="search" name="search" placeholder="Search" />
                    </div>
                </div>

                <div>
                    <!-- routerView -->
                    <router-view></router-view>
                </div>
            </div>

            <div class="bg-gray-700 h-screen">
                <!-- sidebar -->
            </div>
        </div>
    </div>
</template>

<script>
import SideNav from '@/components/sideNav.vue'

export default {
  name: 'app',
  components: {
    SideNav
  }
}
</script>
