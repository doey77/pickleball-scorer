import { ThemeProvider } from '@mui/material'
import './App.css'
import PickleBall from './components/Pickleball'
import { ViewportProvider } from './context/viewport'
import theme from './theme'

export default function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <ViewportProvider>
          <PickleBall />
        </ViewportProvider>
      </ThemeProvider>
    </div>
  )
}
