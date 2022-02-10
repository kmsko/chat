
import style from './Registration.module.css'
import { useHistory } from 'react-router-dom'

const Registration = () => {
    return <>
        <form className={style.form_registration} action="#">
            <div className={style.titel_form_registration}>
                <h2 className={style.titel}>
                    Регистрация
                </h2>
            </div>

        </form>
    </>
}
export default Registration