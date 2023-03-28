<template>
  <!-- NOTE if you want something to persist on ea. page of the app, put it here -->
  <header>
    <Navbar />
  </header>
  <main class="bg-black2 text-white">
    <!-- NOTE router view holds/renders your pages -->
    <router-view />
  </main>
</template>


<script>
import { computed } from 'vue'
import { AppState } from './AppState'
import Navbar from './components/Navbar.vue'

export default {
  setup() {
    return {
      appState: computed(() => AppState)
    }
  },
  components: { Navbar }
}
</script>
<style lang="scss">
@import "./assets/scss/main.scss";

:root{
  --main-height: calc(100vh - 32px - 64px);
}

.bg-red{
  background-color: #970A0A
}

.bg-black2{
  background-color: #222222;
}

footer {
  display: grid;
  place-content: center;
  height: 32px;
}
</style>
