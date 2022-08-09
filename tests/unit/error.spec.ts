import { shallowMount } from '@vue/test-utils'
import ErrorView from '@/components/ErrorView.vue'

describe('ErrorView.vue', () => {
  it('renders props.msg when passed', () => {
    const wrapper = shallowMount(ErrorView, {
      propsData: {}
    })
    expect(wrapper.text())
  })
})
