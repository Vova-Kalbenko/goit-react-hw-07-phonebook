import React, { useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from '../../redux/contacts/contacts-selectors';
import { addContactsThunk, getContactsThunk, } from 'redux/contacts/contactsThunk';
import css from './Form.module.css'

export default function Form () {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getContactsThunk());
  }, [dispatch]);

  const handleInputChange = (event) => {
    const { name, value } = event.currentTarget;

    if (name === '' && number === '') {
      alert('all fields must be fill in');
      return;
    }

    if (name === 'name') {
      setName(value);
      return
    } else if (name === 'number') {
      setNumber(value);
      return
    }
    return
  };
  const contacts = useSelector(selectContacts);

  const handleSubmit = (e) => {
    e.preventDefault();

    const newContact = {
      name: name,
      number: number,
    };

    if (
      contacts.some(
        contact =>
          contact.name.toLowerCase().trim() === name.toLowerCase().trim()
      )
    ) {
      return alert(`${name} is already in contacts`);
    }
    dispatch(addContactsThunk(newContact));
    resetForm()
  };

  const resetForm  = () => {
    setName('');
    setNumber('');
  };
    return (
      <div>
        <h3>Phonebook</h3>
        <form onSubmit={handleSubmit} className={css.form}>
          <label>
            Name
            <input
              type="text"
              value={name}
              onChange={handleInputChange}
              // id={nameInputId}
              name="name"
              className={css.nameInput}
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
          </label>
          <label>
            Number
            <input
              type="tel"
              value={number}
              onChange={handleInputChange}
              // id={numberInputId}
              name="number"
              className={css.numberInput}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
          </label>
          <button type="submit">
          add contact
        </button>
        </form>
      </div>
    );
  }

Form.propTypes = {
  contactsName: PropTypes.arrayOf(PropTypes.string.isRequired),
};





