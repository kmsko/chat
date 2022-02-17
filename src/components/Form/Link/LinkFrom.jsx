import { Link } from 'react-router-dom'
import style from './LinkForm.module.css'

const LinkForm = ({type}) => {
    return <Link to={type.url} className={(type.text === "Регистрация") ? style.registration : style.re_pass}>{type.text}</Link>
}

export default LinkForm