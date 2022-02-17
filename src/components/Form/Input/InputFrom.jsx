import { useRef, useState } from "react"
import style from './InputForm.module.css'
import mail from '../../../assets/formIcon/mail.png'
import person from '../../../assets/formIcon/person.png'
import eye from '../../../assets/formIcon/eye.png'
import password from '../../../assets/formIcon/password.png'


const InputForm = ({ type }) => {
    const [textInput, settextInput] = useState("")

    const inputType = useRef()

    const seeInput = () =>{
        if(inputType.current.type === "password"){
            inputType.current.type = "text"
        }else{
            inputType.current.type = "password"
        }
    }

    const setText = (e) => {
        settextInput(e.currentTarget.value)
    }



    return <div className={style.input_wrapper}>
        <div className={style.input_wrapper_icon}>
            <img
                className={style.input_icon}
                src={type.type === "email" ? mail : 
                (type.type === "password" || type.type === "text") ? password : 
                (type.type==="name" || type.type === "surname") ? person : null  }
                alt="email" />
        </div>

 
            <input
                onChange={setText}
                ref={inputType}
                className={style.input_login}
                type={type.type}
                autoComplete='on'
                placeholder={type.placeholder}
                value={textInput}
            />
            
            <img onClick={seeInput} src={eye} className={ type.type === "password" ? style.eye : style.eye_none } alt="eye" />
    

    </div>
}

export default InputForm