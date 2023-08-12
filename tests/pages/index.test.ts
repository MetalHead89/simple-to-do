import { describe, test, expect, vitest, vi, afterAll } from 'vitest'
import { mountSuspended } from 'nuxt-vitest/utils'
import { createTestingPinia } from '@pinia/testing'

import index from '@/pages/index.vue'
import { useListsStore } from '@/stores/lists'

describe('Add list button', async () => {
  test('Add list button is exists', async () => {
    const page = await mountSuspended(index)
    const button = page.find('.add-list')

    expect(button).toBeTruthy()
  })

  test('Added new empty list when clicked add list button', async () => {
    const mapStore = useListsStore()
    const page = await mountSuspended(index, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vitest.fn,
            initialState: {
              lists: []
            }
          })
        ]
      }
    })
    const button = page.find('.add-list')

    button.trigger('click')

    expect(mapStore.lists.length()).toBe(1)
  })
})
