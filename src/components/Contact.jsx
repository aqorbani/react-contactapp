import { useState } from "react";
import ContactList from "./ContactList";

const Contact = () => {
  const [contactList, setContactList] = useState([]);
  const [contact, setContact] = useState({
    name: "",
    email: "",
    phone: "",
  });

  const changeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;

    setContact((contact) => ({ ...contact, [name]: value }));
  };

  const addHandler = () => {
    if (!contact.name || !contact.email || !contact.phone) {
        alert("Please enter valid data")
    }
    setContactList((contactList) => [...contactList, contact]);
    setContact({
      name: "",
      email: "",
      phone: "",
    });
  };

  return (
    <div>
      <div>
        <input
          type="text"
          name="name"
          value={contact.name}
          onChange={changeHandler}
          placeholder="name & family"
        />
        <input
          type="email"
          name="email"
          value={contact.email}
          onChange={changeHandler}
          placeholder="email"
        />
        <input
          type="number"
          name="phone"
          value={contact.phone}
          onChange={changeHandler}
          placeholder="phone"
        />
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <ContactList contacts={contactList} />
    </div>
  );
};

export default Contact;
