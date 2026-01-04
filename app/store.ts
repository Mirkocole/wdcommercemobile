import { configureStore } from '@reduxjs/toolkit'
import { useDispatch } from 'react-redux'
import userReducer from './slices/userSlice'

export interface RootState {
  user: ReturnType<typeof userReducer>;
}

export type AppDispatch = typeof store.dispatch
export const useAppDispatch = useDispatch.withTypes<AppDispatch>()

const store = configureStore({
  reducer: {
    user: userReducer,
  },
})

export default store