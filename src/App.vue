<template>
    <div class="font-display">
        <div class="lg:grid lg:grid-cols-5">
            <aside class="bg-primary h-full hidden lg:inline">
                <!-- sidebar -->
                <SideNav />
            </aside>

            <div class="lg:col-span-3">
                <!-- routerView -->
                <router-view></router-view>
            </div>

            <div class="bg-primary h-full hidden lg:inline">
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
