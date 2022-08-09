import { shallowMount } from '@vue/test-utils'
import SummaryView from '@/components/SummaryView.vue'

describe('ErrorView.vue', () => {
  it('renders props.msg when passed', () => {
    const formData={
        name:"John Smith",
        age: 46,
        package: "Standard",
        premium: 30,
        location: "USA"
    }
    const wrapper = shallowMount(SummaryView, {
    propsData: {formData}
    })
    expect(wrapper.text())
  })
})
