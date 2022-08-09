<template>
  <div class="summary">
    <h1 class="p-2 text-4xl font-black sm:p-8 text-center">Summary</h1>
    <h4>${name}</h4>
    <div class="m-4">Name: {{formData.name}}</div>
    <div class="m-4">Age: {{formData.age}}</div>
    <div class="m-4">Where do you live: {{getLocation}}</div>
    <div class="m-4">Package: {{packageString}}</div>
    <div class="m-4">Premium: {{formData.premium}}</div>
    <div>
        <button @click="$emit('back')" class="bg-white text-black px-7 py-2 m-2 rounded border-2 border-slate-900">Back</button>
        <button @click="$emit('buy')" class="bg-black text-white px-8 py-2 m-2 rounded border-2 border-slate-900">Buy</button>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'SummaryView',
  props:['formData'],
  components: {
  },
  computed:{
    getLocation(){
      const locations={
        HKD:"Hong Kong",
        USD:"USA",
        AUD:"Australia"
      }
      return locations[this.formData.location]
    },
    packageString(){
      const packageStrings={
        "1":"Standard",
        "2":"Safe",
        "3":"Super Safe"
      }
      return packageStrings[this.formData.package.toString()]
    }
  }
});
</script>
