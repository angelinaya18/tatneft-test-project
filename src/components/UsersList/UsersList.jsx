import PropTypes from "prop-types"
import User from "../User/User"
import style from "./style.module.css"

export default function UsersList({users}){
    return(
        <div className={style.container}>
           {
            users.map((userItem)=>(
                <User key={userItem.id} 
                    name={userItem.name}
                    login={userItem.login}
                    last_visit_date={userItem.last_visit_date}
                />
            ))
           }
        </div>
    )
}

UsersList.propTypes={
    users: PropTypes.array
}