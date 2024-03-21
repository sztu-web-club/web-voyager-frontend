import type { Hooks, Input, Options } from 'ky'
import { useTokenStore } from '@/ui/stores/token'
import { ky } from '@/platform/network/ky'

export abstract class AbstractRepo {
  private tokenStore = useTokenStore()
  protected baseUrl: string
  protected request: ReturnType<typeof ky.extend>

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl
    const hooks: Hooks = {
      beforeRequest: [
        (request) => {
          if (this.tokenStore.isLogged)
            request.headers.append('Authorization', `Bearer ${this.tokenStore.token}`)
          request.headers.append('Content-Type', 'application/json')
          request.headers.append('Accept', 'application/json')
        },
      ],
      afterResponse: [],
    }

    // stripped out in production
    if (import.meta.env.DEV) {
      hooks.beforeRequest?.push((request, options) => {
        // eslint-disable-next-line no-console
        console.log(request.url)
        // eslint-disable-next-line no-console
        console.log(options)
        // eslint-disable-next-line no-console
        console.log(request)
      })
      hooks.afterResponse?.push(async (request, options, response) => {
        // eslint-disable-next-line no-console
        console.log(request.url)
        // eslint-disable-next-line no-console
        console.log(options)
        // eslint-disable-next-line no-console
        console.log(await response.json())
      })
    }

    this.request = ky.extend({
      prefixUrl: this.baseUrl,
      hooks,
    })
  }

  async post<T, D>(url: Input, options?: Options & { json?: D }) {
    return await this.request.post(url, options).json<T>()
  }

  async get<T>(url: Input, options?: Options) {
    return await this.request.get(url, options).json<T>()
  }
}
