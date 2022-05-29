import { useMachine } from '@xstate/react'
import './App.css'
import { trafficLightMachine } from './trafficLightMachine'

function App() {
  const [current, send] = useMachine(trafficLightMachine)
  return (
    <div className='traffic-light'>
      <input
        type='radio'
        readOnly
        className='light red'
        checked={current.matches({ ON: 'red' })}
      />
      <input
        type='radio'
        readOnly
        className='light yellow'
        checked={current.matches({ ON: 'yellow' })}
      />
      <input
        type='radio'
        readOnly
        className='light green'
        checked={current.matches({ ON: 'green' })}
      />
      <button onClick={() => send('NEXT')}>NEXT</button>
      <button onClick={() => send('TURN_OFF')}>OFF</button>
      <button onClick={() => send('TURN_ON')}>ON</button>
    </div>
  )
}

export default App
