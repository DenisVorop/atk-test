import React from 'react'
import { Navigate, Route, Routes, useLocation, useNavigate } from 'react-router-dom'

import Header from './components/Header/Header'

import { routes } from './routes'

const App = () => {
    const location = useLocation()
    const navigate = useNavigate()

    React.useEffect(() => {
        if (location.pathname === '/profile') {
            const localStorageBoolean = localStorage.getItem('auth')
            if (!localStorageBoolean)
                return navigate('/login')
        }
    }, [location.pathname])

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
                        <Route path="*" element={<Navigate to="/" />} />
                    </Route>
                </Routes>
            </main >
        </div >
    )
}

export default App
