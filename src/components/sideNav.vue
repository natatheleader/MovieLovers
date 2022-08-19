<template>
    <div class="bg-stone-800">
        <div class="mt-36 ml-36 text-white">
            <ul>
                <li class="pt-5"><router-link to="/"><span><svg class="inline-block align-middle h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <polyline points="5 12 3 12 12 3 21 12 19 12" />  <path d="M5 12v7a2 2 0 0 0 2 2h10a2 2 0 0 0 2 -2v-7" />  <path d="M9 21v-6a2 2 0 0 1 2 -2h2a2 2 0 0 1 2 2v6" /></svg></span> Home</router-link></li>
                <li class="pt-5"><router-link to="/movies"><span><svg class="inline-block align-middle h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <rect x="4" y="4" width="16" height="16" rx="2" />  <line x1="8" y1="4" x2="8" y2="20" />  <line x1="16" y1="4" x2="16" y2="20" />  <line x1="4" y1="8" x2="8" y2="8" />  <line x1="4" y1="16" x2="8" y2="16" />  <line x1="4" y1="12" x2="20" y2="12" />  <line x1="16" y1="8" x2="20" y2="8" />  <line x1="16" y1="16" x2="20" y2="16" /></svg></span> Movies</router-link></li>
                <li class="pt-5"><router-link to="/browse"><span><svg class="inline-block align-middle h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z" fill="white"></path> </svg> </span> Browse</router-link></li>
                <!-- <li class="pt-5"><router-link to="/anime"><span><svg class="inline-block align-middle h-8 w-8 text-red-500"  width="24" height="24" viewBox="0 0 24 24" stroke-width="2" stroke="currentColor" fill="none" stroke-linecap="round" stroke-linejoin="round">  <path stroke="none" d="M0 0h24v24H0z"/>  <path d="M5 11a7 7 0 0 1 14 0v7a1.78 1.78 0 0 1 -3.1 1.4a1.65 1.65 0 0 0 -2.6 0a1.65 1.65 0 0 1 -2.6 0a1.65 1.65 0 0 0 -2.6 0a1.78 1.78 0 0 1 -3.1 -1.4v-7" />  <line x1="10" y1="10" x2="10.01" y2="10" />  <line x1="14" y1="10" x2="14.01" y2="10" />  <path d="M10 14a3.5 3.5 0 0 0 4 0" /></svg></span> Anime</router-link></li> -->
            </ul>
        </div>
    </div>
</template>

<script>
export default {
  name: 'SideNav'
}
</script>
