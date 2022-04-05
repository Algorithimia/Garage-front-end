import { configureStore } from '@reduxjs/toolkit'
import auth from './store slices/auth'
import address from './store slices/addreseSlice'
import userDetails from './store slices/detailUser'
import GoEmploye from './store slices/GOEmploy'
import workshop from './store slices/workshopSlice'
import workOrders from './store slices/workOrderSlices/workOrder'
import models from './store slices/workOrderSlices/modelSlice'
import inventory from './store slices/InventorySice'
export default   configureStore({
  reducer: {
      auth,
      address,
      userDetails,
      GoEmploye,
      workshop,
      workOrders,
      models,
      inventory
    }

  })