export interface IUserAuthRepo {
  getChiperKey: () => Promise<{
    key: string
    salt: string
  }>
  login: (username: string, password: string) => Promise<void>
  logout: () => Promise<void>
}
