import { AppDispatch } from '../store'

import { authSlice } from './authSlice'

// *** Auth ***
export const authorization = (login: string, password: string) => (dispatch: AppDispatch) => {
    if (login === 'Admin' && password === '12345') {
        localStorage.setItem('auth', 'true')
        return dispatch(authSlice.actions.authorizationSuccess(true))
    }
    return dispatch(authSlice.actions.authorizationError('Имя пользователя или пароль введены не верно'))
}

export const logout = () => (dispatch: AppDispatch) => {
    return dispatch(authSlice.actions.logoutNow())
}

export const checkAuth = () => (dispatch: AppDispatch) => {
    const isAuth = localStorage.getItem('auth')
    if (!!isAuth)
        return dispatch(authSlice.actions.authorizationSuccess(true))
    return dispatch(authSlice.actions.authorizationError('Вы не авторизованы'))
}
