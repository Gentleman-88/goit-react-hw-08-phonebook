import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css'
import { selectContacts, selectError, selectFilter, selectIsLoading } from '../../Redux/selectors';
import { Loader } from 'components/Loader/Loader';
import { deleteContact } from 'services/api';

const ContactList = () => {

    const dispatch = useDispatch()
    const filter = useSelector(selectFilter)
    const contacts = useSelector(selectContacts)
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);


    const handleDeleteContact = contactId => {
        dispatch(deleteContact(contactId))
    };



    const filteredContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
    );


    return (
        <>
            {error && <h2>Oopsss...Something went wrong...</h2>}
            {isLoading && !error ? <Loader /> : (
                <ul className={css.contactList}>
                {filteredContacts.map(contact => (
                    <li key={contact.id}
                        className={css.contactListItem}>
                        {contact.name}: {contact.number}
                        <button
                            className={css.deleteButton}
                            onClick={() => handleDeleteContact(contact.id)}
                        >
                            X
                        </button>
                    </li>
                ))
                }
            </ul>
            )}
            {error && contacts.length > 0 && <h2>Oopsss...Something went wrong...</h2>}
        </>
    );
}

export { ContactList };