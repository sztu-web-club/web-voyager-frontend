import { singleton } from 'tsyringe'
import { AbstractRepo } from '../AbstractRepo'
import type { User } from '../types/user/user'
import type { IUserAuthRepo } from '@/domain/user/IUserAuthRepo'

@singleton()
export class UserAuthRepo extends AbstractRepo implements IUserAuthRepo {
  async login(username: string, password: string): Promise<void> {
    return await this.post<User.Auth.Login.Response, User.Auth.Login.Request>('/user/login', {
      username,
      password,
      // TODO: use real uuid
      uuid: 'uuid',
      timestamp: Date.now().valueOf(),
    })
  }

  async logout(): Promise<void> {
    return await this.post<User.Auth.Logout.Response, User.Auth.Logout.Request>('/user/logout', {})
  }

  async getChiperKey(): Promise<{
    key: string
    salt: string
  }> {
    return (await this.get<User.Auth.GetChiperKey.Response>('/user/getChiper')).data
  }
}
