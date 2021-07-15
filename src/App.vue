<template>
  <main role="main" id="main">
    <Readdir />
  </main>
  <div
    class="bg-main-bg bg-cover bg-center bg-no-repeat fixed inset-0 -z-10 blur-md brightness-75 filter"
    id="background"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'App',
})
</script>

<style>
@import url(@/assets/fonts/fonty.css);
@import url(@/styles/primevue.css);
#background {
  box-shadow: 0 0 0 2rem black;
}
</style>
