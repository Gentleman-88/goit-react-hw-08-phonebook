import { useDispatch, useSelector } from 'react-redux';
import css from './ContactList.module.css'
import { selectContacts, selectError, selectFilter, selectIsLoading } from '../../Redux/selectors';
import { deleteContact, fetchContacts } from 'services/api';
import { useEffect } from 'react';
import { LoaderForList } from 'components/Loader/LoaderForList';

const ContactList = () => {

    const dispatch = useDispatch()
    const filter = useSelector(selectFilter)
    const contacts = useSelector(selectContacts)
    const isLoading = useSelector(selectIsLoading);
    const error = useSelector(selectError);

    useEffect(() => {
        dispatch(fetchContacts())
    }, [dispatch])

    const handleDeleteContact = contactId => {
        dispatch(deleteContact(contactId))
    };



    const filteredContacts = contacts.filter(contact =>
        contact.name.includes(filter)
    );


    return (
        <>
            {error && <h2 className={css.error}>Oopsss...Something went wrong...</h2>}
            {isLoading && !error ? <LoaderForList /> : (
                <ul className={css.contactList}>
                {filteredContacts.map(contact => (
                    <li key={contact.id}
                        className={css.contactListItem}>
                        <span className={css.contactName}>{contact.name}:</span>
                        <span className={css.number}>{contact.number}</span>
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
            {error && contacts.length > 0 && <h2 className={css.error}>Oopsss...Something went wrong...</h2>}
        </>
    );
}

export { ContactList };