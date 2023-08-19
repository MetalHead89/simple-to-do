import { describe, test, expect,vi } from 'vitest'
import { mountSuspended } from 'nuxt-vitest/utils'
import { useI18n } from 'vue-i18n'

import index from '@/pages/index.vue'

describe('Lang switcher', () => {
  test('Lang switcher is exist', async () => {
    const page = await mountSuspended(index)
    const langSwitcher = page.find('.lang-switcher')

    expect(langSwitcher.exists()).toBe(true)
  })

  test('langSwitcher must run the setLocale method with the desired parameters', async () => {
    const setItem = vi.spyOn(Storage.prototype, 'setItem').mockImplementation(() => {})
    const page = await mountSuspended(index)
    const ruRadioButton = await page.find('[value="ru"]')
    const enRadioButton = await page.find('[value="en"]')

    // await nextTick()
    // await nextTick()
    // await nextTick()

    await enRadioButton.setValue(true)
    // await enRadioButton.trigger('click')
    await nextTick()
    await nextTick()
    await nextTick()
    // console.dir(setItem)

    // console.dir(localStorage.getItem('to-do_locale'))

    expect(setItem).toBeCalledWith('ru')
  })
})
