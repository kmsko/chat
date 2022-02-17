import style from "./AllForm.module.css"
import InputForm from "./Input/InputFrom"
import ButtonForm from "./Button/ButtonForm"
import TitelForm from "./Titel/TitelForm"
import LinkForm from "./Link/LinkFrom"

const AllForm = (props) => {
    return (
        <div className={style.form_authorization}>
            <div className={style.titel_wrapper}>
                <TitelForm type={props.titel} />
            </div>
            <form action="#">
                {Object.values(props.input).map(key => <InputForm type={key} />)}
                <ButtonForm type={props.button} />
            </form>
            <div className={style.link_in}>
                {Object.values(props.link).map(key => <LinkForm type={key} />)}
            </div>
        </div>
    )
}

export default AllForm