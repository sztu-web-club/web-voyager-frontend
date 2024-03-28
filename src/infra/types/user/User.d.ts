import type { BaseResp } from '../BaseResp'

namespace User {
  namespace Auth {
    namespace GetChiperKey {
      export interface Request {
      }
      export type Response = BaseResp<{
        key: string
        salt: string
      }>
    }
    namespace Login {
      export interface Request {
        username: string
        password: string
        uuid: string
        timestamp: number
      }

      // server set cookie so no response body
      export type Response = never
    }
    namespace Logout {
      export interface Request {
      }
      export type Response = never
    }
  }
}
