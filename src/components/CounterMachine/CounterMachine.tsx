import { useMachine } from '@xstate/react'
import React from 'react'
import { counterMachine } from '../../counterMachine'

export const CounterMachine = () => {
  //send is something like dispatch
  const [state, send] = useMachine(counterMachine)
  return (
    <div
      style={{
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column',

        alignItems: 'center',
      }}
    >
      <output>{state.context.count}</output>
      <button onClick={() => send('INCREMENT')}>increment number</button>
      <button onClick={() => send('DECREMENT')}>decrement number</button>
    </div>
  )
}
