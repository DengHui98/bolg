import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import BlIcon from '../src/BlIcon.vue'

describe('BlIcon', () => {
  it('渲染正确的 class 和 style', () => {
    const wrapper = mount(BlIcon, {
      props: {
        type: 'home',
        size: '2rem',
      },
    })
    const icon = wrapper.find('i')
    expect(icon.classes()).toContain('iconfont')
    expect(icon.classes()).toContain('icon-home')
    expect(icon.element.style.fontSize).toBe('2rem')
  })

  it('默认 size 为 1rem', () => {
    const wrapper = mount(BlIcon, {
      props: {
        type: 'user',
      },
    })
    const icon = wrapper.find('i')
    expect(icon.element.style.fontSize).toBe('1rem')
  })
})
