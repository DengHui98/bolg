import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BlEmpty from '../index'

describe('BlEmpty Component', () => {
  it('renders correctly', () => {
    const wrapper = mount(BlEmpty)
    expect(wrapper.exists()).toBe(true)
    const emptyIcon = wrapper.find('.icon-empty')
    expect(emptyIcon.exists()).toBe(true)
    expect(emptyIcon.attributes('style')).toBe('font-size: 12rem;')
    expect(wrapper.text()).toContain('Empty')
  })
  it('accepts custom size', () => {
    const wrapper = mount(BlEmpty, {
      props: {
        size: '3rem',
      },
    })
    const emptyIcon = wrapper.find('.icon-empty')
    expect(emptyIcon.attributes('style')).toBe('font-size: 3rem;')
  })
  it('accepts custom text', () => {
    const customText = 'No Data Available'
    const wrapper = mount(BlEmpty, {
      props: {
        text: customText,
      },
    })
    expect(wrapper.text()).toContain(customText)
  })
})
