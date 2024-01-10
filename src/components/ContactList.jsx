import PropTypes from "prop-types";
import ContactItem from "./ContactItem";

const ContactList = ({ contacts, deleteHandler }) => {
  ContactList.propTypes = {
    contacts: PropTypes.array,
    deleteHandler: PropTypes.func,
  };
  return (
    <div>
      <h1>Contacts List</h1>
      {contacts.length ? (
        <ul>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p>No Contacts Yet.</p>
      )}
    </div>
  );
};

export default ContactList;
