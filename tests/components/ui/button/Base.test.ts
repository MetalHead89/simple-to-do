
import { it, expect, describe, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import UiButtonBase from '@/components/ui/button/Base.vue'

describe ('UiButtonBase', () => {
  it('Should render', async () => {
    const wrapper = await mountSuspended(UiButtonBase)
    expect(wrapper.classes()).toContain('button')
  })

  it ('Should be of type button', async () => {
    const wrapper = await mountSuspended(UiButtonBase)
    const button = wrapper.find('.button')

    expect(button.attributes().type).toBe('button')
  })

  it('Should be of type submit', async () => {
    const wrapper = await mountSuspended(UiButtonBase, {
      props: {
        type: 'submit'
      }
    })
    const button = wrapper.find('.button')

    expect(button.attributes().type).toBe('submit')
  })

  it('Should emit click event', async () => {
    const handleClick = vi.fn()
    const wrapper = await mountSuspended(UiButtonBase, {
      attrs: {
        onClick: handleClick
      }
    })

    const button = wrapper.find('.button')
    await button.trigger('click')

    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('Should not generate a click event', async () => {
    const handleClick = vi.fn()
    const wrapper = await mountSuspended(UiButtonBase, {
      props: {
        disabled: true
      },
      attrs: {
        onClick: handleClick
      }
    })

    const button = wrapper.find('.button')
    await button.trigger('click')

    expect(handleClick).not.toHaveBeenCalled()
  })

  it('Should emit submit event', async () => {
    const handleSubmit = vi.fn()
    const wrapper = await mountSuspended(UiButtonBase, {
      props: {
        type: 'submit'
      },
      attrs: {
        onSubmit: handleSubmit
      }
    })

    const button = wrapper.find('.button')
    await button.trigger('submit')

    expect(handleSubmit).toHaveBeenCalledTimes(1)
  })

  it('Should be disabled', async () => {
    const wrapper = await mountSuspended(UiButtonBase, {
      props: {
        disabled: true
      }
    })

    expect(wrapper.find('.button').attributes('disabled')).toBeDefined()
  })
})
