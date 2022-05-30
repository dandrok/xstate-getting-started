import { useMachine } from '@xstate/react'
import React from 'react'
import { counterMachine } from '../../stateMachines/counterMachine'

export const CounterMachine = () => {
  //send is something like dispatch
  const [state, send] = useMachine(counterMachine)
  return (
    <div
      style={{
        margin: '1rem',
        display: 'flex',
        flexDirection: 'column',
        // border: 'solid gray 1px',
        alignItems: 'center',
        padding: '1rem',
        borderRadius: '0.5rem',
        gap: '0.25rem',
        boxShadow: '0px 0px 10px -5px #000000',
      }}
    >
      <output style={{ fontSize: '2rem' }}>{state.context.count}</output>
      <button
        style={{
          width: '100%',
          padding: '0.5rem',
          background: 'skyblue',
          border: 'none',
          borderRadius: '0.20rem',
          color: 'white',
          textTransform: 'uppercase',

          fontWeight: 'bold',
        }}
        onClick={() => send('INCREMENT')}
      >
        increment
      </button>
      <button
        style={{
          width: '100%',
          padding: '0.5rem',
          background: 'skyblue',
          border: 'none',
          borderRadius: '0.20rem',
          color: 'white',
          textTransform: 'uppercase',

          fontWeight: 'bold',
        }}
        onClick={() => send('DECREMENT')}
      >
        decrement
      </button>
    </div>
  )
}
