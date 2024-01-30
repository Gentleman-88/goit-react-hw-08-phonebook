import { AddContactForm, ContactList, Filter } from 'components'
import Navigation from 'components/Navigation/Navigation'
import React from 'react'

const Contacts = () => {
    return (
        <div>
            <Navigation />
            <AddContactForm />
            <Filter />
            <ContactList />
        </div>
    )
}

export default Contacts
