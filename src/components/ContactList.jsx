import PropTypes from "prop-types";
import ContactItem from "./ContactItem";
import styles from "./ContactList.module.css";

const ContactList = ({ contacts, deleteHandler }) => {
  ContactList.propTypes = {
    contacts: PropTypes.array,
    deleteHandler: PropTypes.func,
  };
  return (
    <div className={styles.container}>
      <h3>Contacts List</h3>
      {contacts.length ? (
        <ul className={styles.contacts}>
          {contacts.map((contact) => (
            <ContactItem
              key={contact.id}
              contact={contact}
              deleteHandler={deleteHandler}
            />
          ))}
        </ul>
      ) : (
        <p className={styles.message}>No Contacts Yet.</p>
      )}
    </div>
  );
};

export default ContactList;
