import PropTypes from "prop-types"
import style from "./style.module.css"

export default function User({name, login, last_visit_date, type_user_name}){
    return(
        <>
            <div className={style.container}>
                <div className={style.container__colum1}>
                    <span>{name}</span>
                    <span>{login}</span>
                    <span>{type_user_name}</span>
                </div>
                <span className={style.container__date}>{new Date(last_visit_date).toLocaleDateString()}</span>
            </div>
        </>
    )
}

User.propTypes={
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    last_visit_date: PropTypes.string.isRequired,
    type_user_name: PropTypes.string.isRequired
}