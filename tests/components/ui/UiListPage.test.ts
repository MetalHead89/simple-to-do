import { describe, test, expect, beforeAll, vi} from 'vitest'
import { createTestingPinia } from '@pinia/testing'
import { mountSuspended } from 'nuxt-vitest/utils'

import index from '@/pages/index.vue'

describe('List page', async () => {
  let page = await mountSuspended(index)

  beforeAll(async () => {
    // Figure out why the testing store is not working
    page = await mountSuspended(index, {
      global: {
        plugins: [
          createTestingPinia({
            createSpy: vi.fn,
            initialState: {
              lists: {
                isShowListPage: true
              }
            }
          })
        ]
      }
    })
  })

  test('List page is not show', () => {
    const listPage = page.find('.list-page')
    expect(listPage.exists()).toBe(false)
  })

  test('List page is show', async () => {
    const button = page.find('.add-list')

    let listPage = page.find('.list-page')
    expect(listPage.exists()).toBe(false)

    button.trigger('click')
    await nextTick()

    const listPreview = page.find('.list-preview')
    listPreview.trigger('click')
    await nextTick()

    listPage = page.find('.list-page')
    expect(listPage.exists()).toBe(true)
  })

  // test('List page opens and closes', async () => {
  //   const showPageButton = page.find('.add-list')
  //   const hidePageButton = page.find('.close-list')

  //   hidePageButton.trigger('click')
  //   await nextTick()
  //   let listPage = page.find('.list-page')
  //   expect(listPage.exists()).toBe(false)

  //   showPageButton.trigger('click')
  //   await nextTick()
  //   listPage = page.find('.list-page')
  //   expect(listPage.exists()).toBe(true)

  //   hidePageButton.trigger('click')
  //   await nextTick()
  //   listPage = page.find('.list-page')
  //   expect(listPage.exists()).toBe(false)
  // })
})
