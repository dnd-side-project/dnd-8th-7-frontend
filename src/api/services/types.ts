import { type AxiosResponse } from 'axios'

export type PromiseAxios<T> = Promise<AxiosResponse<T>>
export type ServiceFunc<Params = unknown, Res = unknown> = (
  params: Params,
) => PromiseAxios<Res>
