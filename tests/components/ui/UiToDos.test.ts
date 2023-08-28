import { describe, test, expect, beforeAll, vi } from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mountSuspended } from 'nuxt-vitest/utils'

import index from '@/pages/index.vue'
import { useListsStore } from '@/stores/lists'

describe('ToDos list', async () => {
  let page = await mountSuspended(index)
  let listsStore = useListsStore()


  beforeAll(async () => {
    // Figure out why the testing store is not working
    page = await mountSuspended(index, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              lists: {
                lists: [],
                isShowListPage: true
              }
            }
          })
        ]
      }
    })

    listsStore = useListsStore()
  })

  test('A message should be displayed stating that there are no lists', async () => {
    expect(page.html()).contains('class="empty"')
  })

  test('The message that there are no lists should not be displayed', async () => {
    const button = page.find('.add-list')

    expect(page.html()).contains('class="empty"')

    button.trigger('click')
    await nextTick()

    expect(page.html()).not.contains('class="empty"')
  })

  test('When you click on the add list button, one new list should be added', async () => {
    listsStore.lists = []
    const button = page.find('.add-list')

    expect(listsStore.lists.length).toBe(0)

    button.trigger('click')
    await nextTick()
    expect(listsStore.lists.length).toBe(1)

    button.trigger('click')
    await nextTick()
    expect(listsStore.lists.length).toBe(2)

    button.trigger('click')
    await nextTick()
    expect(listsStore.lists.length).toBe(3)
  })
})
