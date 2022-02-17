import style from './TitelForm.module.css'
import avatar from '../../../assets/formIcon/avatar.png'

const TitelForm = ({ type }) => {
    return <>
    {(type.text === "image") ? <div className={style.avatar_wrapper}>
            <img className={style.avatar_image} src={avatar} alt="logo" />
        </div> : <h2 className={style.titelForm} >{type.text}</h2>}
        

    </>
}
export default TitelForm