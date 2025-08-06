import { mount } from '@vue/test-utils'
import { describe, it, expect } from 'vitest'
import BlAvatar from '../index'

describe('BlAvatar', () => {
  it('renders with default props', () => {
    const wrapper = mount(BlAvatar)
    expect(wrapper.exists()).toBe(true)
  })

  it('renders with src prop', () => {
    const wrapper = mount(BlAvatar, {
      props: {
        src: 'https://placebear.com/800/600',
      },
    })
    const img = wrapper.find('img')
    expect(img.exists()).toBe(true)
    expect(img.attributes('src')).toBe('https://placebear.com/800/600')
  })

  it('applies size class', () => {
    const wrapper = mount(BlAvatar, {
      props: {
        src: 'https://placebear.com/800/600',
        size: 'small',
      },
    })
    const img = wrapper.find('img')
    expect(img.classes()).toContain('w-8')
    expect(img.classes()).toContain('h-8')
  })

  it('applies bounded class when bounded prop is true', () => {
    const wrapper = mount(BlAvatar, {
      props: {
        src: 'https://placebear.com/800/600',
        bounded: true,
      },
    })
    const img = wrapper.find('img')
    expect(img.classes()).toContain('rounded-[50%]')
  })
})
