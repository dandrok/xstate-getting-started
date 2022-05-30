import { createMachine, assign } from 'xstate'

type CounterContext = {
  count: number
}
type CounterEvents = { type: 'INCREMENT' } | { type: 'DECREMENT' }

type CounterStates = { value: 'active'; context: CounterContext }

export const counterMachine = createMachine<
  CounterContext,
  CounterEvents,
  CounterStates
>({
  id: 'counter',
  initial: 'active',
  context: { count: 0 },
  states: {
    active: {
      on: {
        INCREMENT: {
          actions: assign({ count: (ctx: { count: number }) => ctx.count + 1 }),
        },
        DECREMENT: {
          actions: assign({ count: (ctx: { count: number }) => ctx.count - 1 }),
        },
      },
    },
  },
})
