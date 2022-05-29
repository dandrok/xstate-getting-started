import { CounterMachine } from './components/CounterMachine/CounterMachine'
import { TrafficLightMachine } from './components/TrafficLightMachine/TrafficLightMachine'

function App() {
  return (
    <>
      <TrafficLightMachine />
      <CounterMachine />
    </>
  )
}

export default App
