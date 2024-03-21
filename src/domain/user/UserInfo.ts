import { AuditableEntity } from '../AuditableEntity'

export class UserInfo extends AuditableEntity {
  nickname: string
  avatar: string

  constructor(nickname: string, avatar: string) {
    super()
    this.nickname = nickname
    this.avatar = avatar
  }

  async updateInfo(nickname: string, avatar: string) {
    this.nickname = nickname
    this.avatar = avatar
    // TODO: update info
  }

  async uploadAvatar(_avatar: File) {
    // TODO: upload avatar
  }
}
