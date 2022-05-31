import { useMachine } from '@xstate/react'
import React from 'react'
import { temperatureMachine } from '../../stateMachines/temperatureMachine'

interface Props {}

export const TemperatureMachine = (props: Props) => {
  const [state, send] = useMachine(temperatureMachine)

  const { C, F } = state.context

  return (
    <div
      style={{
        background: 'lightgray',
        padding: '1rem',
        borderRadius: '.25rem',
      }}
    >
      <label>
        <input
          style={{
            background: 'skyblue',
            border: 'none',
            padding: '0.5rem',
            borderRadius: '.25rem',
          }}
          type='number'
          id='CELSIUS'
          value={C ?? ''}
          onChange={(e) => {
            send('CELSIUS', { value: e.target.value })
          }}
          placeholder='0'
        />
        <span>˚C</span>
      </label>
      <div>=</div>
      <label>
        <input
          style={{
            background: 'skyblue',
            border: 'none',
            padding: '0.5rem',
            borderRadius: '.25rem',
          }}
          type='number'
          id='FAHRENHEIT'
          value={F ?? ''}
          onChange={(e) => {
            send('FAHRENHEIT', { value: e.target.value })
          }}
          placeholder='32'
        />
        <span>˚F</span>
      </label>
    </div>
  )
}
