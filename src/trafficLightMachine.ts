import { createMachine } from 'xstate'

type TrafficLightsEvents =
  | { type: 'NEXT' }
  | { type: 'TURN_OFF' }
  | { type: 'TURN_ON' }

type TrafficLightStates =
  | { value: { ON: 'red' }; context: undefined }
  | { value: { ON: 'yellow' }; context: undefined }
  | { value: { ON: 'green' }; context: undefined }
  | { value: 'OFF'; context: undefined }

export const trafficLightMachine = createMachine<
  undefined,
  TrafficLightsEvents,
  TrafficLightStates
>({
  id: 'traffic-light',
  initial: 'ON',
  states: {
    ON: {
      on: { TURN_OFF: 'OFF' },
      initial: 'red',
      states: {
        green: {
          on: { NEXT: 'yellow' },
          after: {
            2000: 'yellow',
          },
        },
        yellow: {
          on: { NEXT: 'red' },
          after: {
            2000: 'red',
          },
        },
        red: {
          on: { NEXT: 'green' },
          after: {
            2000: 'green',
          },
        },
      },
    },
    OFF: {
      on: { TURN_ON: 'ON' },
    },
  },
})
