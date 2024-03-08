import { useState, useEffect } from "react"

function getStorageValue(key, defaultValue) {
  // Check if `window` is defined (i.e., if we're running on the client side)
  if (typeof window !== "undefined") {
    // getting stored value
    const saved = localStorage.getItem(key)
    const initial = JSON.parse(saved)
    return initial || defaultValue
  }
  // Return default value if we're on the server side or if `localStorage` is not available
  return defaultValue
}

export const useLocalStorage = (key, defaultValue) => {
  const [value, setValue] = useState(() => {
    return getStorageValue(key, defaultValue)
  })

  useEffect(() => {
    // storing input name
    localStorage.setItem(key, JSON.stringify(value))
  }, [key, value])

  return [value, setValue]
}
