import { Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faTimes } from '@fortawesome/free-solid-svg-icons'

const AddButton = ({ shouldShowAdd, toggleShowAdd }) => {
    return (
        <Button onClick={toggleShowAdd} variant={ shouldShowAdd ? "success" : "danger"} className="mt-3">
           <FontAwesomeIcon icon={shouldShowAdd ? faPlus : faTimes } />
        </Button>
    )
}

export default AddButton
