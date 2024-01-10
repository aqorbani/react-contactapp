import PropTypes from "prop-types";

const ContactList = ({ contacts }) => {
  ContactList.propTypes = {
    contacts: PropTypes.array,
  };
  return (
    <div>
      <h1>Contacts List</h1>
      <ul>
        {contacts.map((contact, index) => (
          <li key={index}>{contact.name}</li>
        ))}
      </ul>
    </div>
  );
};

export default ContactList;
