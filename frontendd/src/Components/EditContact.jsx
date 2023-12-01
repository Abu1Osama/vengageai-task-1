import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { fetchContactById, updateContact } from "../Redux/action";
import "../Styles/EditContact.scss"

function EditContact() {
    const navigate=useNavigate()
  const { id } = useParams();
  const [editedContact, setEditedContact] = useState(null); 
  const dispatch = useDispatch();

  const contactFromRedux = useSelector((state) => state.contactReducer.selectedContact);

  useEffect(() => {
    if (id) {
      if (!editedContact || editedContact.id !== id) {
        dispatch(fetchContactById(id)).catch((error) => {
          console.error(`Error fetching contact with ID ${id}:`, error);
        });
      }
    }
  }, [dispatch, id, editedContact]);

  useEffect(() => {
    setEditedContact(contactFromRedux);
  }, [id]);
  


  const handleInputChange = (e) => {
    const { name, value } = e.target;
    console.log(`Setting ${name} to:`, value);
    setEditedContact((prevContact) => ({
      ...prevContact,
      [name]: value === "" ? null : value,
    }));
  };
  
  
  const handleUpdateContact = () => {
    dispatch(updateContact(id, editedContact));
    navigate(`/contact-details/:id`)
  };

  if (!editedContact) {
    return <div>Loading...</div>;
  }
  const movetocontact=()=>{
    navigate(`/`)
  }

  return (
    <div className="EditContact" id="EditContact">
      <div className="actionform">
      <i onClick={movetocontact} class="fa-solid fa-x"></i>
      <h2>Edit Contact</h2>
      <i onClick={handleUpdateContact}class="fa-solid fa-check"></i>
      </div>
      <div className="Edit-logo">
        <i className="fa-solid fa-user"></i>
      </div>
      <div>
        <label>First Name:</label>
        <input
          type="text"
          name="firstName"
          value={editedContact.firstName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Last Name:</label>
        <input
          type="text"
          name="lastName"
          value={editedContact.lastName}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Phone Number:</label>
        <input
          type="text"
          name="phoneNumber"
          value={editedContact.phoneNumber}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="text"
          name="email"
          value={editedContact.email}
          onChange={handleInputChange}
        />
      </div>
      <div>
        <label>Address:</label>
        <input
          type="text"
          name="address"
          value={editedContact.address}
          onChange={handleInputChange}
        />
      </div>
      
    </div>
  );
}

export default EditContact;
