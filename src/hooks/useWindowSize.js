import { useEffect, useState } from 'react'
import ExecutionEnvironment from '@/hooks/ExecutionEnvironment'

const windowSizes = {
  desktop: 'desktop',
  mobile: 'mobile',
  ssr: 'ssr',
}

const DesktopThresholdWidth = 996

function getWindowSize() {
  if (!ExecutionEnvironment.canUseDOM) {
    return windowSizes.ssr
  }
  return window.innerWidth > DesktopThresholdWidth
    ? windowSizes.desktop
    : windowSizes.mobile
}

// Simulate the SSR window size in dev, so that potential hydration FOUC/layout shift problems can be seen in dev too!
const DevSimulateSSR = process.env.NODE_ENV === 'development' && true

function useWindowSize() {
  const [windowSize, setWindowSize] = useState(() => {
    if (DevSimulateSSR) {
      return 'ssr'
    }
    return getWindowSize()
  })

  useEffect(() => {
    function updateWindowSize() {
      setWindowSize(getWindowSize())
    }

    const timeout = DevSimulateSSR
      ? window.setTimeout(updateWindowSize, 1000)
      : undefined

    window.addEventListener('resize', updateWindowSize)

    return () => {
      window.removeEventListener('resize', updateWindowSize)
      clearTimeout(timeout)
    }
  }, [])

  return windowSize
}

export default useWindowSize
