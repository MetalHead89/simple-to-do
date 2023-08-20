import { describe, test, expect } from 'vitest'
import { mountSuspended } from 'nuxt-vitest/utils'

import index from '@/pages/index.vue'

const { $constants } = useNuxtApp()

describe('Lang switcher', () => {
  test('Lang switcher is exist', async () => {
    const page = await mountSuspended(index)
    const langSwitcher = page.find('.lang-switcher')

    expect(langSwitcher.exists()).toBe(true)
  })

  test('Switching langSwitcher should change the value in localStorage', async () => {
    const page = await mountSuspended(index)
    const ruRadioButton = page.find('[value="ru"]')
    const enRadioButton = page.find('[value="en"]')

    enRadioButton.setValue(true)
    expect(localStorage.getItem($constants.LOCALE_LS_KEY)).toBe('en')

    ruRadioButton.setValue(true)
    expect(localStorage.getItem($constants.LOCALE_LS_KEY)).toBe('ru')
  })
})
