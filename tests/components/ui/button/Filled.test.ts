import { it, expect, describe, vi } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import UiButtonFilled from '@/components/ui/button/Filled.vue'

describe ('UiButtonFilled', () => {
  it('Should render', async () => {
    const wrapper = await mountSuspended(UiButtonFilled)
    expect(wrapper.classes()).toContain('button-filled')
  })

  it ('Should be of type button by default', async () => {
    const wrapper = await mountSuspended(UiButtonFilled)
    expect(wrapper.attributes().type).toBe('button')
  })

  it('Should emit click event', async () => {
    const handleClick = vi.fn()
    const wrapper = await mountSuspended(UiButtonFilled, {
      attrs: {
        onClick: handleClick
      }
    })

    await wrapper.trigger('click')
    expect(handleClick).toHaveBeenCalledTimes(1)
  })

  it('Should not emit click event', async () => {
    const handleClick = vi.fn()
    const wrapper = await mountSuspended(UiButtonFilled, {
      props: {
        disabled: true
      },
      attrs: {
        onClick: handleClick
      }
    })

    await wrapper.trigger('click')
    expect(handleClick).not.toHaveBeenCalled()
  })

  it('Should display text in default slot', async () => {
    const SLOT_TEXT = 'Test text'
    const wrapper = await mountSuspended(UiButtonFilled, {
      slots: {
        default: SLOT_TEXT
      }
    })

    await wrapper.trigger('click')
    expect(wrapper.html()).toContain(SLOT_TEXT)
  })
})
