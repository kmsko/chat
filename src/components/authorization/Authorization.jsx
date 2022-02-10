import { useRef, useState } from 'react'
import style from './Authorization.module.css'
import avatar from '../../assets/formIcon/avatar.png'
import emailIcon from '../../assets/formIcon/mail.png'
import pass from '../../assets/formIcon/password.png'
import glas from '../../assets/formIcon/glas.png'
import { Link } from 'react-router-dom'

const AllForm = ({typeForm}) => {

    const [inputType, setInputType] = useState("password")
    const [login, setLogin] = useState()
    const [password, setPassword] = useState()

    const setTextLogin = (e) => {
        setLogin(e.currentTarget.value)
    }
    const setTextPassword = (e) => {
        setPassword(e.currentTarget.value)
    }

    return <>
        <form className={style.form_authorization} action="#">

            <div className={style.titel_wrapper}>
                <div className={style.avatar_wrapper}>
                    <img className={style.avatar_image} src={avatar} alt="logo" />
                </div>
            </div>

            <div className={style.inpute_wrapper}>
                <div className={style.wrapper_icon}>
                    <img className={style.input_icon} src={emailIcon} alt="email" />
                </div>
                <input onChange={setTextLogin} className={style.login} type="email" autoComplete='on' placeholder='Email' />
            </div>

            <div className={style.inpute_wrapper}>
                <div className={style.wrapper_icon}>
                    <img className={style.input_icon} src={pass} alt="pass" />
                </div>
                <input onChange={setTextPassword} className={style.password} type={inputType} name="password" autoComplete='current-password' placeholder='Пароль' />

                <img onClick={setInputType("text")} className={style.input_icon__glas} src={glas} alt="galss" />

            </div>

            <button className={style.submit} type="submit"> Войти </button>

            <div className={style.link_in}>

                <Link to={"/restartpass"} className={style.re_pass}>Забыли пароль?</Link>
                <Link to={"/registration"} className={style.registration}>Регистрация</Link>
            </div>

        </form>
    </>
}
export default AllForm