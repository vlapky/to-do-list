import { faCheckCircle, faCircle, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Item = ({ id, text, isCompleted, deleteItem }) => {
    return (
        <div className="item" key={id} id={id}>
            <FontAwesomeIcon className={isCompleted ? 'purple isCompleted' : 'isCompleted'} icon={isCompleted ? faCheckCircle : faCircle} />
            <p className={isCompleted ? 'text textIsCompleted' : 'text'}>{ text }</p>
            <FontAwesomeIcon onClick={deleteItem} className='delete' icon={faTimes} />
        </div>
    )
}

export default Item;