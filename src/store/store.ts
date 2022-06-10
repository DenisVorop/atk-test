import { configureStore, combineReducers } from '@reduxjs/toolkit'

import newsReducer from './newsSlice/newsSlice'
import authReducer from './authSlice/authSlice'

const rootReducer = combineReducers({
    newsReducer,
    authReducer,
})

export const setupStore = () => configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
