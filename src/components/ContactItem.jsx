import PropTypes from "prop-types";
import styles from "./ContactItem.module.css";

const ContactItem = ({
  contact: { id, name, email, phone },
  deleteHandler,
}) => {
  ContactItem.propTypes = {
    contact: PropTypes.object,
    deleteHandler: PropTypes.func,
  };

  return (
    <li className={styles.item}>
      <p>{name}</p>
      <p>{email}</p>
      <p>{phone}</p>
      <p>
        <button onClick={() => deleteHandler(id)}>🗑</button>
      </p>
    </li>
  );
};

export default ContactItem;
