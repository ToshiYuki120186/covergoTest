<template>
  <div class="home">
    <p class="p-2 text-2xl font-black sm:p-8 text-center">Ooops</p>
    <div class="text-xl text-center">
      <p>Your age is over our accepted limit.</p>
      <p>We are sorry but we canot insure you now</p>
    </div>
    <button @click="$emit('goHome')" class="bg-black text-white px-8 py-2 m-2 rounded">OK :(</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'ErrorView',
  components: {
  },
});
</script>
