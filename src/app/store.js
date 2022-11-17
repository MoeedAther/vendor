import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from '../features/token'
import userdataReducer from '../features/userdata'

export default configureStore({
  reducer: {
    token:tokenReducer,
    userdata:userdataReducer
  }
})