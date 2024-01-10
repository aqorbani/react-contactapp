import PropTypes from "prop-types";

const ContactItem = ({
  contact: { id, name, email, phone },
  deleteHandler,
}) => {
  ContactItem.propTypes = {
    contact: PropTypes.object,
    deleteHandler: PropTypes.func,
  };

  return (
    <li key={id}>
      <p>{name}</p>
      <p>
        <span>📫</span>
        {email}
      </p>
      <p>
        <span>📱</span>
        {phone}
      </p>
      <p>
        <button onClick={() => deleteHandler(id)}>🗑</button>
      </p>
    </li>
  );
};

export default ContactItem;
