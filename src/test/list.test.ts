import List from '../components/list.vue'
import { mount } from '@vue/test-utils'

test('add item', async () => {
    const wrapper = mount(List, {
        props: {
            dataList: []
        }
    })

    const input = wrapper.find('[data-test="input"]')
    const button = wrapper.find('[data-test="add-button"]')

    input.setValue('Test')
    await button.trigger('click')

    expect(wrapper.emitted('update:dataList')).toHaveLength(1)
})


