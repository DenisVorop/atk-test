import React from 'react'
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom'
import cn from 'classnames'

import logoutImg from '../../assets/images/logout.svg'
import logoImg from '../../assets/images/logo.svg'

import { useAppDispatch, useAppSelector } from '../../store/hooks/redux'

import { logout } from '../../store/authSlice/authActionCreators'

import './header.scss'

const Header: React.FC = () => {
    const [activeLink, setActiveLink] = React.useState('/')
    const {isAuth} = useAppSelector(store => store.authReducer)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const location = useLocation()

    const links = [
        { path: '/', name: 'Главная' },
        { path: '/news', name: 'Новости' },
        { path: '/profile', name: 'Профиль' },
    ]

    const toggleActiveLink = (path: string) => {
        setActiveLink(path)
    }

    React.useEffect(() => {
        setActiveLink(location.pathname)
    }, [location.pathname])

    const exit = () => {
        localStorage.removeItem('auth')
        dispatch(logout())
        navigate('/login')
    }

    return (
        <>
            <div className="header">
                <div className="header__container">
                    <div className="header__body">
                        <div className="header__left">
                            <div className="header__logo">
                                <Link to="/">
                                    <img src={logoImg} alt="logo" />
                                </Link>
                            </div>
                            <div className="header__links">
                                {links.map(link => (
                                    <Link
                                        to={link.path}
                                        key={link.path}
                                        className={cn({ 'link-active': link.path === activeLink }, 'header__link')}
                                        onClick={() => toggleActiveLink(link.path)}
                                    >
                                        {link.name}
                                    </Link>
                                ))}
                            </div>
                        </div>
                        <div className="header__main">
                            {isAuth
                                ? <div className="header__logout" onClick={exit}>
                                    <span>Выйти</span>
                                    <img src={logoutImg} alt="logout" />
                                </div>
                                : <div className="header__login" onClick={() => navigate('/login')}>Войти</div>
                            }
                        </div>
                    </div>
                </div>
            </div >
            <Outlet />
        </>
    )
}

export default Header
