import './App.css'
import PickleBall from './components/Pickleball'
import { ViewportProvider } from './context/viewport'

export default function App() {
  return (
    <div className="App">
      <ViewportProvider>
        <PickleBall />
      </ViewportProvider>
    </div>
  )
}
