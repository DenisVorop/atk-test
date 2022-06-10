import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
    isAuth: boolean
    error: string
}

const initialState: AuthState = {
    isAuth: false,
    error: '',
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        authorizationSuccess(state, action: PayloadAction<boolean>) {
            state.isAuth = action.payload
            state.error = ''
        },
        authorizationError(state, action: PayloadAction<string>) {
            state.isAuth = false
            state.error = action.payload
        },
        logoutNow(state) {
            state.isAuth = false
            state.error = ''
        },
    },
})

export default authSlice.reducer
