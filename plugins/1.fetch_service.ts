import { API_REALMS } from '@/configs/constants'

type TFetchPath = {
  realm: keyof typeof API_REALMS | undefined;
  path: string;
}

export type TFetchService = {
  get<T = unknown>(path: TFetchPath, params?: Record<string, unknown>): Promise<T>;
  post<T = unknown>(path: TFetchPath, body: BodyInit | Record<string, unknown> | null | undefined): Promise<T>;
  patch<T = unknown>(path: TFetchPath, body: BodyInit | Record<string, unknown> | null | undefined): Promise<T>;
}

const DEFAULT_REALM = 'api'

export default defineNuxtPlugin(nuxtApp => {
  const REALMS_ENDPOINTS = {
    [API_REALMS.api]: '/api'
  }

  const onResponseError = async () => {}

  const createFullPath = ({ realm, path }: TFetchPath) => {
    return `${REALMS_ENDPOINTS[realm || DEFAULT_REALM]}${path || ''}`
  }

  const fetch = $fetch.create({ onResponseError })

  const fetchService: TFetchService = {
    get: (path, params) => fetch(createFullPath(path), { method: 'get', realm: path.realm, params }),
    post: (path, body) => fetch(createFullPath(path), { method: 'post', body, realm: path.realm }),
    patch: (path, body) => fetch(createFullPath(path), { method: 'patch', body, realm: path.realm })
  }

  nuxtApp.provide('fetchService', fetchService)
})
