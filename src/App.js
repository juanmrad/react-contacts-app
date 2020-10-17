import React from 'react';
import ContactList from './components/ContactList';

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      name: '',
      email: '',
      phone_number: '',
      address: '',
      city: '',
      state: '',
      zip_code: '',
      contacts: [
        {
          name: 'John Smith', 
          email: 'Smith@email.com',
          phone_number: '999999999', 
          address: '123 Elm St.', 
          city: 'City', 
          state: 'TX', 
          zip_code: '77077'
        },
        {
          name: 'Jane Smith', 
          email: 'jane@email.com',
          phone_number: '999999999', 
          address: '123 Elm St.', 
          city: 'City', 
          state: 'TX', 
          zip_code: '77077'
        }
      ]
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    console.log("here");
    // write epic code to ad input values from wherever they are to my contacts array.
    let newContacts = [ ...this.state.contacts, {
      name: this.state.name, 
      email: this.state.email,
      phone_number: this.state.phone_number,
      address: this.state.address,
      city: this.state.city,
      state: this.state.state,
      zip_code:this.state.zip_code,
    } ];
    console.log(this.state);
    this.setState({contacts: newContacts});
  }

  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  }
  
  // name, e-mail, phone number, address, city, state, and zip code

  render() {
    return (
      <div>
        {/* Create a form to submit contacts */}
        <div id="contactForm">
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.handleChange} id="name" placeholder="enter name" type="text"/>
            <input onChange={this.handleChange} id="email" placeholder="email" type="text"/>
            <input onChange={this.handleChange} id="phone_number" placeholder="phone number" type="text"/>
            <input onChange={this.handleChange} id="address" placeholder="address" type="text"/>
            <input onChange={this.handleChange} id="city" placeholder="city" type="text"/>
            <input onChange={this.handleChange} id="state" placeholder="state" type="text"/>
            <input onChange={this.handleChange} id="zip_code" placeholder="zip code" type="text"/>
            <button type="submit">Create Contact</button>
          </form>
        </div>


        {/* Create a list of all my contacts only show name, city, and state. */}
        <ContactList contacts={this.state.contacts} />


        {/* Should be able to Create a way to delete contacts.*/}
      </div>
    );
  }
}

export default App;
