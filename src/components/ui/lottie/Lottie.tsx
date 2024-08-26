import React, { useEffect, useRef } from 'react'
import lottie from 'lottie-web'

interface ILottieProps {
  path: string
  className?: string
  style?: React.CSSProperties
}

const Lottie = ({ path, className, style, ...props }: ILottieProps) => {
  const lottieRef = useRef<any>(null)

  useEffect(() => {
    if (path && lottie) {
      const animation = lottie.loadAnimation({
        container: lottieRef.current,
        path: path,
        renderer: 'svg',
        loop: true,
        autoplay: true
      })

      return () => animation.destroy()
    }
  }, [lottie, path])

  return (
    <div
      ref={lottieRef}
      className={className}
      style={style}
      {...props}
    />
  )
}

export default Lottie
