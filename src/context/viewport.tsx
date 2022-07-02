import { createContext, useContext, useEffect, useState } from 'react'

interface ViewportContextType {
  width: number
  height: number
}

const ViewportContext = createContext<ViewportContextType>({
  width: 0,
  height: 0,
})

type ViewportProviderProps = {
  children: JSX.Element
}

export function ViewportProvider({ children }: ViewportProviderProps) {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const handleWindowResize = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowResize)
    return () => window.removeEventListener('resize', handleWindowResize)
  }, [])

  return (
    // eslint-disable-next-line react/jsx-no-constructed-context-values
    <ViewportContext.Provider value={{ width, height }}>
      {children}
    </ViewportContext.Provider>
  )
}

export const useViewport = () => {
  const { width, height } = useContext(ViewportContext)
  return { width, height }
}
