import { describe, test, expect } from 'vitest'
import { mountSuspended } from 'nuxt-vitest/utils'

import index from '@/pages/index.vue'
import { useListsStore } from '@/stores/lists'

describe('ToDoLists', async () => {
  test('There are no lists on the page', async () => {
    const listsStore = useListsStore()
    const page = await mountSuspended(index)
    const button = page.find('.add-list')

    expect(page.html()).contains('class="empty"')
  })

  test('There are lists on the page', async () => {
    const listsStore = useListsStore()
    const page = await mountSuspended(index)
    const button = page.find('.add-list')

    expect(page.html()).contains('class="empty"')

    button.trigger('click')
    await nextTick()

    expect(page.html()).contains('class="to-do-lists"')
  })
})
