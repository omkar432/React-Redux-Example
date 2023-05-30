import { configureStore } from '@reduxjs/toolkit'
import xxx from './counterSlice'

export default configureStore({
  reducer: {
    amount: xxx,
  },
})