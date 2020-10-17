import React from 'react';
import Contact from './Contact';

class ContactList extends React.Component {

  render() {
    return (
      <div id="contactList">
      {
        this.props.contacts.map((contact, index) => {
          return (
            <Contact key={index} index={index} contact={contact} />
          )
        })
      }
    </div>
    );
  }
}

export default ContactList;