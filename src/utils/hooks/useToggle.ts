import { useReducer } from 'react'

export const useToggle = (initial = false) =>
  useReducer((state) => !state, initial)
