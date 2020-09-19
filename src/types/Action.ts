export interface Action<Param> {
  type: string
  payload?: Param
}