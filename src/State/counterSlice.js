import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'amount',
  initialState: {
    value: 0,
  },
  reducers: {
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
    decrementByAmount: (state, action) => {
        state.value -= action.payload
      },
  },
})

// Action creators are generated for each case reducer function
export const { increment, decrement, incrementByAmount, decrementByAmount } = counterSlice.actions

export default counterSlice.reducer