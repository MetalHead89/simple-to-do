import type { TApi } from '@/api/types'
import type { TFetchService } from '@/plugins/1.fetch_service'

declare module 'vue-ellipse-progress'

declare module '#app' {
  interface NuxtApp {
    $api: TApi;
    $fetchService: TFetchService;
  }
}

declare module 'vue' {
  interface ComponentCustomProperties {
    $api: TApi;
    $fetchService: TFetchService;
  }
}

