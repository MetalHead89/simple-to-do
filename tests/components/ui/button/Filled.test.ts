import { it, expect, describe } from 'vitest'
import { mountSuspended } from '@nuxt/test-utils/runtime'
import UiButtonFilled from '@/components/ui/button/Filled.vue'

describe ('UiButtonFilled', () => {
  it('Should render', async () => {
    const wrapper = await mountSuspended(UiButtonFilled)
    expect(wrapper.classes()).toContain('button-filled')
  })
})
