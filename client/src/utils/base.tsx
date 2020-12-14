import { useRef, useEffect } from 'react'

export const useEffectAfterMount = (callback: any, dependencies: any) => {
  const justMounted = useRef(true)
  useEffect(() => {
    if (!justMounted.current) {
      return callback()
    }
    justMounted.current = false
  }, dependencies)
}
