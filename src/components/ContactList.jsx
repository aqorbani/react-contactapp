import PropTypes from "prop-types";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts }) => {
  ContactList.propTypes = {
    contacts: PropTypes.array,
  };
  return (
    <div>
      <h1>Contacts List</h1>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem key={contact.id} contact={contact} />
          ))}
        </ul>
      ) : (
        <p>No Contacts Yet.</p>
      )}
    </div>
  );
};

export default ContactList;
