import { AddContactForm, ContactList, Filter } from 'components'
import React from 'react'

const Contacts = () => {

    return (
        <div>
            <AddContactForm />
            <Filter />
            <ContactList />
        </div>
    )
}

export default Contacts
