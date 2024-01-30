import { AddContactForm } from './AddContactForm/AddContactForm';
import { Filter } from './Filter/Filter';
import { ContactList } from './ContactList/ContactList';

export const App = () => {

  return (
    <div>
      <AddContactForm/>
      <Filter/>
      <ContactList/>
    </div>
  );
}