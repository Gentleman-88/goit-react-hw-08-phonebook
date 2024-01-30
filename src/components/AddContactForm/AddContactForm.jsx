import { useDispatch, useSelector } from 'react-redux';
import css from './AddProfileForm.module.css'
import { selectContacts } from '../../Redux/selectors';
import { addContact } from 'services/api';

export const AddContactForm = () => {

  const dispatch = useDispatch()
  const contacts = useSelector(selectContacts)
  
  const handleFormSubmit = event => {

    event.preventDefault();

    const name = event.currentTarget.name.value;
    const number = event.currentTarget.number.value;

    const formData = {
      name,
      number,
    };

    handleAddContact(formData);
    event.currentTarget.reset();
  };

  const handleAddContact = formData => {
    const hasDuplicates = contacts.some(
      contact => contact.name.toLowerCase() === formData.name.toLowerCase()
    );
    if (hasDuplicates) {
      alert(`${formData.name} is already in contacts!`);
      return;
    }

    const finalProfile = {
      ...formData,
      id: Math.random().toString()
    }

    dispatch(addContact(finalProfile))
  };

    return (
      <form className={css.form} onSubmit={handleFormSubmit}>
        <label className={css.formLabel}>
          <span className={css.formLabelText}>Name</span>
          <input className={css.formInput} type="text" name="name" required />
        </label>
        <label className={css.formLabel}>
          <span className={css.formLabelText}>Number</span>
          <input className={css.formInput} type="tel" name="number" required />
        </label>
        <button className={css.formButton} type="submit">Add contact</button>
      </form>
    );
  }