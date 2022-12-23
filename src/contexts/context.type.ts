import { Dispatch, ReactNode, SetStateAction } from "react"

export type ProviderProps = {
  children?: ReactNode
}

export type ContextData<T> = {
  get: T
  set: Dispatch<SetStateAction<T>>
}
