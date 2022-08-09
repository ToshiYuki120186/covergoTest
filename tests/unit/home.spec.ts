import { shallowMount } from '@vue/test-utils'
import HomeView from '@/views/HomeView.vue'

describe('HomeView.vue', () => {
  it('renders props.msg when passed', () => { 
    const wrapper = shallowMount(HomeView, {
        propsData: {}
    })  
    wrapper.find('button').trigger('click') 
  })  
})
