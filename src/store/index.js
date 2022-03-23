import { configureStore } from '@reduxjs/toolkit'
import auth from './store slices/auth'

export default   configureStore({
  reducer: {
      auth}

  })