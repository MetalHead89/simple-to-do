import { vi } from 'vitest'

vi.mock('vue-i18n', () => ({
    useI18n: () => ({
      setLocale: vi.fn(() => {}),
      locale: 'ru'
    })
  })
)
