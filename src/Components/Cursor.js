import { useEffect } from 'react'
import Shery from 'sheryjs'
import 'sheryjs/dist/shery.css'

const Cursor = () => {
  useEffect(() => {
    Shery.mouseFollower({
      skewing: 2,
      ease: "cubic-bezier(0.23, 1, 0.320, 1)",
      duration: 1,
    })
  }, [])

  return null
}

export default Cursor