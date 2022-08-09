<template>
  <div class="form-view">
    <p class="p-2 text-2xl font-black sm:p-8 text-center">Tell us about yourself</p>
    <form @submit="submit" class="text-left m-auto w-2/4">
      <div class="mt-4">Name</div>
      <input name="name" v-model="name" class="p-2 border-2 rounded-lg w-full" required />
      <div class="mt-4">Age</div>
      <input name="age" type="number" min="1" v-model="age" class="p-2 border-2 rounded-lg w-full" required />
      <div class="mt-4">Name</div>
      <select name="location" required v-model="location" class="p-2 border-2 rounded-lg w-full">
        <option value="HKD">Hong Kong</option>
        <option value="USD">USA</option>
        <option value="AUD">Australia</option>
      </select>

      <div class="mt-4">
        <div>
          <input type="radio" id="one" value="1" v-model="package" class="my-4 mr-2"/>
          <label for="one">Standard</label>
        </div>
        <div>
          <input type="radio" id="two" value="2" v-model="package" class="my-4 mr-2" />
          <label for="two">Safe (+250HKD, 50%)</label>
        </div>
        <div>
          <input type="radio" id="three" value="3" v-model="package" class="my-4 mr-2"/>
          <label for="three">Super Safe (+375HKD, 75%)</label>
        </div>
      </div>
      <h5 class="my-10 font-bold">Your premium is: {{ premium }}</h5>
      <div class="text-center">
        <button type="button" @click="$emit('back')" class="bg-white text-black px-7 py-2 m-2 rounded border-2 border-slate-900">Back</button>
        <button type="submit" class="bg-black text-white px-8 py-2 m-2 rounded border-2 border-slate-900">Next</button>
      </div>
    </form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
const rates = {
  HKD: 1,
  USD: 2,
  AUD: 3
}
const packages = {
  "1": 1,
  "2": 1.5,
  "3": 1.75
}
export default Vue.extend({
  name: 'FormView',
  components: {
  },
  data: () => ({
    name: "",
    age: "",
    location: "HKD",
    package: 1,
  }),
  computed: {
    premium() {
      return 10 * this.age * rates[this.location as keyof typeof rates] * packages[this.package]+this.location
    }
  },
  methods: {
    submit(e: Event) {
      e.preventDefault()
      this.$emit("next", {
        name: this.name,
        age: this.age,
        location: this.location,
        package: this.package,
        premium: this.premium
      })
    }
  }
});
</script>
<style>
form {
  text-align: left;
  margin: auto;
  width: 250px;
}
</style>