import { configureStore } from '@reduxjs/toolkit'
import auth from './store slices/auth'
import address from './store slices/addreseSlice'
import insideWorkshops from './store slices/inSideWorksopSlice'
import GoEmploye from './store slices/GOEmploy'
export default   configureStore({
  reducer: {
      auth,
      address,
      insideWorkshops,
      GoEmploye
    }

  })