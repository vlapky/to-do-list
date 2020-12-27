import {
  faCheckCircle,
  faCircle,
  faTimes,
} from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

const Item = ({ text, isCompleted, deleteTask, changeFlag }) => {
  return (
    <div className="item">
      <FontAwesomeIcon
        className={isCompleted ? 'purple isCompleted' : 'isCompleted'}
        icon={isCompleted ? faCheckCircle : faCircle}
        onClick={changeFlag}
      />
      <p className={isCompleted ? 'text textIsCompleted' : 'text'}>{text}</p>
      <FontAwesomeIcon onClick={deleteTask} className="delete" icon={faTimes} />
    </div>
  )
}

export default Item
