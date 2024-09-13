import PropTypes from "prop-types"
import style from "./style.module.css"

export default function User({name, login, last_visit_date}){
    console.log()
    return(
        <>
            <div className={style.container}>
                <div className={style.container__colum1}>
                    <span>{name}</span>
                    <span>{login}</span>
                </div>
                <span className={style.container__date}>{new Date(last_visit_date).toLocaleDateString()}</span>
            </div>
        </>
    )
}

User.propTypes={
    name: PropTypes.string.isRequired,
    login: PropTypes.string.isRequired,
    last_visit_date: PropTypes.string.isRequired
}