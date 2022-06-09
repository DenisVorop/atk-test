import { configureStore, combineReducers } from '@reduxjs/toolkit'

import newsReducer from './newsSlice/newsSlice'

const rootReducer = combineReducers({
    newsReducer,
})

export const setupStore = () => configureStore({ reducer: rootReducer })

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore['dispatch']
