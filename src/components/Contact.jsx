import { useState } from "react";
import ContactList from "./ContactList";
import inputs from "../constants/inputs";

const Contact = () => {
  const [contactList, setContactList] = useState([]);
  const [alert, setAlert] = useState("");
  const [contact, setContact] = useState({
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
        <button onClick={addHandler}>Add Contact</button>
      </div>
      <div>{alert && <p>{alert}</p>}</div>
      <ContactList contacts={contactList} />
    </div>
  );
};

export default Contact;
