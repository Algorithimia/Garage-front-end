import { configureStore } from '@reduxjs/toolkit'
import auth from './store slices/auth'
import address from './store slices/addreseSlice'
import userDetails from './store slices/detailUser'
import GoEmploye from './store slices/GOEmploy'
export default   configureStore({
  reducer: {
      auth,
      address,
      userDetails,
      GoEmploye
    }

  })