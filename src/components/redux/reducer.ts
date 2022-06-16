import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  value: number
  data: any[]
}

const initialState: CounterState = {
  value: 0,
  data: [],
}

export const todoReducer = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    getData: (state, {payload}: PayloadAction<any[]>) => {
      state.data = payload
    },
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, { payload }: PayloadAction<any>) => {
      state.value += payload
    },
  },
})

export const { getData, increment, decrement, incrementByAmount } =
  todoReducer.actions

export default todoReducer.reducer
