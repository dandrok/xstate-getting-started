import { createMachine, assign } from 'xstate'

type TemperatureContext = {
  C?: number | string
  F?: number | string
}

type TemperatureEvents =
  | { type: 'CELSIUS'; value: string }
  | { type: 'FAHRENHEIT'; value: string }

type TemperatureStates = { value: string; context: TemperatureContext }

export const temperatureMachine = createMachine<
  TemperatureContext,
  TemperatureEvents,
  TemperatureStates
>({
  initial: 'active',
  context: { C: undefined, F: undefined },
  states: {
    active: {
      on: {
        CELSIUS: {
          actions: assign({
            C: (_, event) => event.value,
            F: (_, event) =>
              event.value.length ? +event.value * (9 / 5) + 32 : '',
          }),
        },
        FAHRENHEIT: {
          actions: assign({
            C: (_, event) =>
              event.value.length ? (+event.value - 32) * (5 / 9) : '',
            F: (_, event) => event.value,
          }),
        },
      },
    },
  },
})
