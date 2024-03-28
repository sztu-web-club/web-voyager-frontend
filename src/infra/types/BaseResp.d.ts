export interface BaseResp<T> {
  code: number
  msg: string
  data: T
}
