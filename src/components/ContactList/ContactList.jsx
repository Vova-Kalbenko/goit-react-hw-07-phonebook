import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFilteredContacts } from '../../redux/filter/filter-selectors';
import { deleteContactsThunk } from '../../redux/contacts/contactsThunk';
import {getContactsThunk} from '../../redux/contacts/contactsThunk';
import ContactListItem from 'components/ContactListItem/ContactListItem';
 import css from './ContactList.module.css';

const ContactList = () => {
  const contacts = useSelector(selectFilteredContacts);
  const dispatch = useDispatch();

  useEffect(() => {
   
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleDeleteContact = (id) => {
    dispatch(deleteContactsThunk(id));
  };


  return (
    <ul className={css.contactsList}>
      {contacts.length !== 0 ? (
        contacts.map(({ id, name, number }) => {
          return (
            <ContactListItem
              key={id}
              id={id}
              name={name}
              number={number}
              onDeleteContact={handleDeleteContact}
            />
          );
        })
      ) : (
        <p>Not found name</p>
      )}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
    })
  ),
};


