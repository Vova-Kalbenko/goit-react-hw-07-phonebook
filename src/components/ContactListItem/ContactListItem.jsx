import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { deleteContactsThunk } from '../../redux/contacts/contactsThunk';
const ContactListItem = ({ id, name, number}) => {
  const dispatch = useDispatch();

  const deleteContact = id => {
    
    dispatch(deleteContactsThunk(id));
  };
  return (
    <li key={id}>
      <span>{name}:</span>
      <span>{number}</span>
      <button
        type="button"
        onClick={() => deleteContact(id)}
      >delete
      </button>
    </li>
  );
};

ContactListItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactListItem;

// создание шаблона 1 контакта который нам будет приходить от сабмита формы.
// где id - это уникальный айдишник который будет генериться с наноид
// name это значение одноименного инпута
// number это значение одноименного инпута
// onDeleteContact метод по кнопке удалить