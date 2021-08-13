import React, { Component } from "react";
import { connect } from "react-redux";
import { getContacts } from "../../redux/contacts/contactSelectors";
import { addContact, fetchContacts } from "../../redux/contacts/contactsOperations";
import { ContactFormStyled } from "./ContactFormStyled";
import AccessibilityNewIcon from "@material-ui/icons/AccessibilityNew";

class ContactForm extends Component {
  state = { name: "", number: "" };

  componentDidMount() {
    this.props.fetchContacts();
  }

  handleInputChange = (event) => {
    const { name, value } = event.currentTarget;
    this.setState({ [name]: value });
  };

  onHandleSubmit = (e) => {
    e.preventDefault();

    const contact = {
      name: this.state.name,
      number: this.state.number,
    };

    const sameContact = this.props.contacts.find(
      (contact) => contact.name.toLowerCase() === this.state.name.toLowerCase()
    );
    if (sameContact) {
      return alert(`${this.state.name} is already exists in the Phonebook`);
    }

    this.props.onSubmit(contact);
    this.setState({ name: "", number: "" });
  };

  render() {
    return (
      <ContactFormStyled>
        <form onSubmit={this.onHandleSubmit}>
          <label className="label">
            <AccessibilityNewIcon style={{ color: "green" }} />
            Name
            <input
              value={this.state.name}
              onChange={this.handleInputChange}
              type="text"
              name="name"
              className="inputName"
              pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
              title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т.п."
              required
            />
            <input
              type="tel"
              name="number"
              className="inputName"
              value={this.state.number}
              onChange={this.handleInputChange}
              pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
              title="Номер телефона должен состоять из цифр, может содержать пробелы, тире, круглые скобки и начинаться с +"
              required
            />
          </label>
          <button type="submit" className="btnAdd">
            Add contact
          </button>
        </form>
      </ContactFormStyled>
    );
  }
}

const mapStateToProps = (state) => ({
  contacts: getContacts(state),
  // contacts: state.contacts.items,
  // filter: state.contacts.filter,
});

const mapDispatchToProps = (dispatch) => ({
  onSubmit: (contact) => dispatch(addContact(contact)),
  fetchContacts: () => dispatch(fetchContacts()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ContactForm);
