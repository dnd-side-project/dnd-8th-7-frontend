export type Config<T extends readonly string[]> = {
  [key in T[number]]: string
}

export type ArrayToUnion<T extends readonly string[]> = T[number]

export type UserProfile = {
  imgUrl: string
  nickname: string
  introduction: string
  isSecret: boolean
}
