import { CounterMachine } from './components/CounterMachine/CounterMachine'
import { TemperatureMachine } from './components/TemperatureMachine/TemperatureMachine'
import { TrafficLightMachine } from './components/TrafficLightMachine/TrafficLightMachine'

function App() {
  return (
    <>
      <TrafficLightMachine />
      <CounterMachine />
      <TemperatureMachine />
    </>
  )
}

export default App
