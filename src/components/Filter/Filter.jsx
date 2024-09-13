import PropTypes from 'prop-types'
import style from './style.module.css'

export default function Filter({ filter, onChange, onClickFind }) {
  return (
    <>
      <input
        className={style.input_search}
        type="text"
        value={filter}
        onChange={(event) => {
          onChange(event.target.value)
        }}
        id="filter"
      />
      <button className={style.button_search} onClick={onClickFind}>
        Поиск
      </button>
    </>
  )
}

Filter.propTypes = {
  filter: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  onClickFind: PropTypes.func
}
