import React from 'react'
import { Form, Formik } from 'formik'
import * as yup from 'yup'
import { useNavigate } from 'react-router-dom'

import './login.scss'

const Login: React.FC = () => {
    const [error, setError] = React.useState<string>('')
    const navigate = useNavigate()

    const login = (values: { login: string; password: string; }) => {
        if (values.login === 'Admin' && values.password === '12345') {
            localStorage.setItem('auth', 'true')
            return navigate('/profile')
        }
        return setError('Имя пользователя или пароль введены не верно')
    }

    React.useEffect(() => {
        const isAuth = localStorage.getItem('auth')
        if (!!isAuth)
            navigate('/')
    }, [])

    React.useEffect(() => {
        if (error)
            setTimeout(() => (setError('')), 2000)
    }, [error])

    const validationLogin = yup.object().shape({
        login: yup.string().typeError('string expected!').required('Поле не может быть пустым!'),
        password: yup.string().typeError('string expected!').required('Поле не может быть пустым!'),
    })

    return (
        <Formik
            initialValues={{
                login: '',
                password: '',
            }}
            validateOnBlur={false}
            validateOnChange={false}
            onSubmit={values => {
                login(values)
            }}
            validationSchema={validationLogin}
        >
            {({ errors, touched, handleChange, handleBlur, isValid, handleSubmit, dirty }) => (
                <Form onSubmit={handleSubmit} className="login">
                    <div className="login__container">
                        <div className="login__body">
                            <div className="login__title">Войти</div>
                            <div className="login__login login-login">
                                <div className="login-login__label login-label">Логин</div>
                                <input
                                    className={touched.login && errors.login ? 'login-login__input login-input valid-input-error ' : 'login-login__input login-input'}
                                    placeholder="Введите логин"
                                    autoComplete="off"
                                    type="login"
                                    name="login"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.login && errors.login && <p className="valid-text-error">{errors.login}</p>}
                            </div>
                            <div className="login__password login-password">
                                <div className="login-password__label login-label">Пароль</div>
                                <input
                                    className={touched.password && errors.password ? 'login-password__input login-input valid-input-error ' : 'login-password__input login-input'}
                                    placeholder="Введите пароль"
                                    type="password"
                                    name="password"
                                    onChange={handleChange}
                                    onBlur={handleBlur}
                                />
                                {touched.password && errors.password && <p className="valid-text-error">{errors.password}</p>}
                            </div>
                            <p className="valid-text-error">{error}</p>
                            <button
                                className="login__button button"
                                disabled={!isValid && !dirty}
                                type="submit"
                            >
                                Войти в систему
                            </button>
                        </div>
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Login
