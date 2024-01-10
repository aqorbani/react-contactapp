import PropTypes from "prop-types";

const ContactItem = ({ contact: { id, name, email, phone } }) => {
  ContactItem.propTypes = {
    contact: PropTypes.object,
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
        <span>🗑</span>
      </p>
    </li>
  );
};

export default ContactItem;
