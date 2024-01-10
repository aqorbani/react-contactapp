import { useState } from "react";
import ContactList from "./ContactList";
import inputs from "../constants/inputs";
import { v4 } from "uuid";
import styles from "./Contact.module.css";

const Contact = () => {
  const [contactList, setContactList] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
    id: "",
    name: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setAlert("");

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (!contact.name || !contact.email || !contact.phone) {
      setAlert("Please enter valid data");
      return;
    }
    setAlert("");

    const newContact = { ...contact, id: v4() };

    setContactList((contactList) => [...contactList, newContact]);
    setContact({
      name: "",
      email: "",
      phone: "",
    });
  };

  const deleteHandler = (id) => {
    const newContactList = contactList.filter((contact) => contact.id !== id);
    setContactList(newContactList);
  };

  return (
    <div className={styles.container}>
      <div className={styles.form}>
        {inputs.map((input, index) => (
          <input
            type={input.type}
            name={input.name}
            placeholder={input.placeholder}
            value={contact[input.name]}
            onChange={changeHandler}
            key={index}
          />
        ))}
        <div className={styles.alert}>{alert && <p>{alert}</p>}</div>
        <button
          className={styles.button}
          onClick={addHandler}
        >
          <span>Add Contact </span>
        </button>
      </div>
      <ContactList contacts={contactList} deleteHandler={deleteHandler} />
    </div>
  );
};

export default Contact;
