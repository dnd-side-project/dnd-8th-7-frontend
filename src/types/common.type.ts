export type Config<T extends readonly string[]> = {
  [key in T[number]]: string
}

export type ArrayToUnion<T extends readonly string[]> = T[number]

export type UserProfile = {
  imgPath: string
  user: string
  introduction: string
  lock: boolean
}
