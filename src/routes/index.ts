import Login from '../pages/Login/Login'
import Main from '../pages/Main/Main'
import News from '../pages/News/News'
import Profile from '../pages/Profile/Profile'

export const routes = [
    {path: '/', component: Main},
    {path: '/news', component: News},
    {path: '/login', component: Login},
    {path: '/profile', component: Profile},
]
