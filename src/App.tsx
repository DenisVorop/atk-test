import React from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import Header from './components/Header/Header'

import { routes } from './routes'

import { checkAuth } from './store/authSlice/authActionCreators'

import { useAppDispatch, useAppSelector } from './store/hooks/redux'

const App = () => {
    const location = useLocation()
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {isAuth} = useAppSelector(store => store.authReducer)

    React.useEffect(() => {
        if (location.pathname === '/profile') {
            if (!isAuth)
                return navigate('/login')
        }
    }, [location.pathname])

    React.useEffect(() => {
        dispatch(checkAuth())
    }, [isAuth])

    return (
        <div className="wrapper">
            <main>
                <Routes>
                    <Route path="/" element={<Header />} >
                        {routes.map(route => (
                            <Route
                                key={route.path}
                                path={route.path}
                                element={<route.component />}
                            />
                        ))
                        }
                    </Route>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
            </main >
        </div >
    )
}

export default App
