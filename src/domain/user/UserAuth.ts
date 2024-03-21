import { AuditableEntity } from '../AuditableEntity'

export class UserAuth extends AuditableEntity {
  username: string
  password: string

  constructor(username: string, password: string) {
    super()
    this.username = username
    this.password = password
  }

  async login(username: string, password: string) {
    this.username = username
    this.password = password
    // TODO: login
  }

  async logout() {
    // TODO: logout
  }
}
