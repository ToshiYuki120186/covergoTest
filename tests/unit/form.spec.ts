import { shallowMount } from '@vue/test-utils'
import FormView from '@/components/FormView.vue'

describe('FormView.vue', () => {
  it('renders props.msg when passed', () => { 
    const wrapper = shallowMount(FormView, {
        propsData: {}
    })

    wrapper.find('input[name=name]').setValue('Yuki Yang')
    wrapper.find('input[type=number]').setValue(50)
    wrapper.find('select').setValue('HKD')
    wrapper.find('input[type="radio"]').setChecked()

    wrapper.findAll('button').at(0).trigger('click')
    expect(wrapper.emitted('back')).toBeTruthy() 

    wrapper.find('form').trigger('submit.prevent')
    expect(wrapper.emitted('next')).toBeTruthy()
     
  })  
})
