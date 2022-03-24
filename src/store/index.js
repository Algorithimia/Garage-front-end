import { configureStore } from '@reduxjs/toolkit'
import auth from './store slices/auth'
import address from './store slices/addreseSlice'
export default   configureStore({
  reducer: {
      auth,
      address
    }

  })