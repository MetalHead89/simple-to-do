import { describe, test, expect, beforeAll } from 'vitest'
import { mountSuspended } from 'nuxt-vitest/utils'

import index from '@/pages/index.vue'
import { useListsStore } from '@/stores/lists'

describe('List page', async () => {
  const listsStore = useListsStore()

  beforeAll(() => {
    listsStore.hideListPage()
  })

  test('List page is not show', async () => {
    const page = await mountSuspended(index)
    const listPage = page.find('.list-page')

    expect(listPage.exists()).toBe(false)
  })

  test('List page is show', async () => {
    const page = await mountSuspended(index)
    const button = page.find('.add-list')

    button.trigger('click')
    await nextTick()
    const listPage = page.find('.list-page')

    expect(listPage.exists()).toBe(true)
  })
})
