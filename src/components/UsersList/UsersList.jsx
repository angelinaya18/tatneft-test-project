import PropTypes from 'prop-types'
import User from '../User/User'
import style from './style.module.css'

function getTypeName(types, type_id) {
  let find_type = types.find((i) => i.id == type_id)
  return find_type ? find_type.name : ''
}

export default function UsersList({ users, types }) {
  return (
    <div className={style.container}>
      {users.map((userItem) => (
        <User
          key={userItem.id}
          name={userItem.name}
          login={userItem.login}
          last_visit_date={userItem.last_visit_date}
          type_user_name={getTypeName(types, userItem.type_id)}
        />
      ))}
    </div>
  )
}

UsersList.propTypes = {
  users: PropTypes.array,
  types: PropTypes.array
}
