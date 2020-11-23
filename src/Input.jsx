import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Input = ({ value, onChange, addItem, onKeyPress }) => {
    return(
        <div className="input-wrapper">
            <input onKeyPress={onKeyPress} onChange={onChange} value={value} type="text" placeholder='Введите текст задачи...' />
            <FontAwesomeIcon onClick={addItem} className='plus' icon={faPlus} />
        </div>
    )
}

export default Input;
