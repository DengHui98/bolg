import { mount } from '@vue/test-utils'
import BlPagination from '../src/BlPagination.vue'
import { describe, it, expect } from 'vitest'
describe('BlPagination', () => {
  it('renders correctly with default props', () => {
    const wrapper = mount(BlPagination, {
      props: {
        total: 100,
        pageSize: 10,
      },
    })

    expect(wrapper.find('.bl-pagination').exists()).toBe(true)
    expect(wrapper.findAll('li').length).toBe(10) // 10 pages for total 100 and pageSize 10
  })

  it('handles page click correctly', async () => {
    const wrapper = mount(BlPagination, {
      props: {
        total: 100,
        pageSize: 10,
      },
    })

    const firstPage = wrapper.find('li:first-child')
    await firstPage.trigger('click')

    expect(wrapper.emitted()).toHaveProperty('page-changed')
    expect(wrapper.emitted()['page-changed'][0]).toEqual([1])
  })
})
