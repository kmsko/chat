import style from './ButtonForm.module.css'

const ButtonForm = ({type}) => {
    return <button className={style.submit} type="submit"> {type.text} </button>
}
export default ButtonForm