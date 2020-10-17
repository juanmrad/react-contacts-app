import React from 'react';

class Contact extends React.Component {

  render() {
    return (
      <li key={this.props.index}>
        <div>{this.props.contact.name}</div>
        <div>{this.props.contact.city}</div>
        <div>{this.props.contact.state}</div>
      </li>
    );
  }
}

export default Contact;