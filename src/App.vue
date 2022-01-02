<template>
    <div class="font-display">
        <div class="grid grid-cols-5">
            <aside class="bg-primary h-full">
                <!-- sidebar -->
                <SideNav />
            </aside>

            <div class="col-span-3">
                <!-- routerView -->
                <router-view></router-view>
            </div>

            <div class="bg-primary h-full">
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
