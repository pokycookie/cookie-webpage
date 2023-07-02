import { useEffect, useState } from 'react'

export function useScrollTop() {
  const [isScrlTop, setIsScrlTop] = useState(false)

  const scrlHandler = () => {
    const scrollY = window.scrollY
    if (scrollY > 0) {
      setIsScrlTop(false)
    } else {
      setIsScrlTop(true)
    }
  }

  useEffect(() => {
    scrlHandler()
    window.addEventListener('scroll', scrlHandler)
    return () => {
      window.removeEventListener('scroll', scrlHandler)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  return isScrlTop
}
