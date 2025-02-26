import { describe, it, expect } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import UiInputText from '@/components/ui/input/Text.vue'

describe('UiInputText', () => {
  it('Should render', async () => {
    const wrapper = await mountSuspended(UiInputText)
    expect(wrapper.classes()).toContain('text-input')
  })

  it('Should update the model when text is entered', async () => {
    const wrapper = await mountSuspended(UiInputText, {
      props: {
        modelValue: 'Initial text'
      }
    })

    const input = wrapper.find('input')
    await input.setValue('new text')

    expect(wrapper.emitted()['update:modelValue'][0]).toEqual(['new text'])
  })

  it('Should change state on focus and blur', async () => {
    const wrapper = await mountSuspended(UiInputText)

    const input = wrapper.find('input')

    await input.trigger('focus')
    expect(wrapper.classes()).toContain('text-input_is-focused')

    await input.trigger('blur')
    expect(wrapper.classes()).not.toContain('text-input_is-focused')
  })

  it('Should render the content of the end slot', async () => {
    const wrapper = await mountSuspended(UiInputText, {
      slots: {
        end: '<span class="slot-content">Slot content</span>'
      }
    })

    expect(wrapper.html()).toContain('Slot content')
    expect(wrapper.find('.slot-content').exists()).toBe(true)
  })
})
