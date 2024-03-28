import { container } from 'tsyringe'
import { AuditableEntity } from '../AuditableEntity'
import type { IUserAuthRepo } from './IUserAuthRepo'
import { UserAuthRepo } from '@/infra/user/UserAuthRepo'

export class UserAuth extends AuditableEntity {
  repo: IUserAuthRepo
  username: string
  password: string

  constructor(username: string, password: string) {
    super()
    this.username = username
    this.password = password
    this.repo = container.resolve(UserAuthRepo)
  }

  async login(username: string, password: string) {
    this.username = username
    this.password = password
    // TODO: login
    return await this.repo.login(username, password)
  }

  async logout() {
    // TODO: logout
  }
}
