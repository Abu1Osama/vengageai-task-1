import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addContact } from "../Redux/action";
import "../Styles/AddContact.scss";

function AddContact({closeform}) {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const initialContact = {
    firstName: "",
    lastName: "",
    phoneNumber: "",
    email: "",
    address: "",
  };

  const [newContact, setNewContact] = useState(initialContact);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewContact((prevContact) => ({
      ...prevContact,
      [name]: value === "" ? null : value,
    }));
  };

  const handleAddContact = () => {
    dispatch(addContact(newContact));
    navigate("/");
    closeform()
  };



  return (
  <div className="AddContact" id="AddContact">
      <div className="AddContact-main" id="AddContact-main">
      <div className="actionform">
        <i onClick={closeform} className="fa-solid fa-x"></i>
        <h2>Add Contact</h2>
        <i onClick={handleAddContact} className="fa-solid fa-check"></i>
      </div>
      <div className="Add-logo">
        <i className="fa-solid fa-user"></i>
      </div>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={newContact.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={newContact.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={newContact.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={newContact.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={newContact.address}
          onChange={handleInputChange}
        />
      </div>
    </div>
  </div>
  );
}

export default AddContact;
