import { useDebugValue, useEffect, useRef, useState } from "react"

/**
 *
 * @param {String} key The key to set in localStorage for this value
 * @param {Object} defaultValue The value to use if it is not already in localStorage
 */
export default function useLocalStorageState(
  key: string,
  defaultValue : string,
) {
  const [state, setState] = useState(() => {
    const valueInLocalStorage = window.localStorage.getItem(key)
    if (valueInLocalStorage) {
      return JSON.parse(valueInLocalStorage)
    }
    return defaultValue
  })

  useDebugValue(`${key}: ${JSON.stringify(state)}`)

  const prevKeyRef = useRef(key)

  useEffect(() => {
    const prevKey = prevKeyRef.current
    if (prevKey !== key) {
      window.localStorage.removeItem(prevKey)
    }
    prevKeyRef.current = key
  }, [key])

  useEffect(() => {
    window.localStorage.setItem(key, JSON.stringify(state))
  }, [key, state])

  return [state, setState]
}