<template>
  <div class="home bg-slate-200 w-4/6 m-auto p-2 sm:w-2/6 mt-20">
    <div v-show="step === 0">
      <div class="p-2 text-2xl font-black">Hello There!</div>
      <p class="p-2 text-xl">Let's buy some insurance. it is going to take only a few steps</p>
      <button @click="step++" class="px-8 py-2 m-2 bg-black text-white rounded border-2 border-slate-800">Start</button>
    </div>
    <FormView v-show="step===1" @next="setFormData" @back="step--"/>
    <SummaryView v-if="formData!==null" v-show="step===2" :formData="formData"  @back="step--" @buy="step=0"/>
    <ErrorView v-show="step==3" @goHome="step=0"/>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import FormView from '../components/FormView.vue';
import SummaryView from '@/components/SummaryView.vue';
import ErrorView from '@/components/ErrorView.vue';

export default Vue.extend({
  name: 'HomeView',
  components: {
    FormView,
    SummaryView,
    ErrorView
},
  data: () => ({
    step: 0,
    formData:null
  }),
  methods:{
    setFormData(data:Array){
      if(data && data['age']>=100){
        this.step=3
        return;
      }
      this.formData=data
      this.step++
    },
  }
});
</script>
