import React, { useEffect } from "react";
import "../Styles/ContactDetails.scss";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate, useParams } from "react-router-dom";
import { deleteContact, fetchContactById } from "../Redux/action";

function ContactDetails() {
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const contact = useSelector((state) => state.contactReducer.selectedContact);

  useEffect(() => {
    if (id) {
      dispatch(fetchContactById(id)).catch((error) => {
        console.error(`Error fetching contact with ID ${id}:`, error);
      });
    }
  }, [dispatch, id]);

  if (!contact) {
    return <div>Loading...</div>;
  }
  const deletecontacthandle = () => {
    if (id) {
      dispatch(deleteContact(id)).catch((error) => {
        console.error(`Error deleting contact with ID ${id}:`, error);
      });
    }
    navigate("/");
  };
  return (
    <div className="ContactDetails" id="ContactDetails">
      <div className="back-btn">
        <i class="fa-solid fa-arrow-left"></i>
        <i onClick={deletecontacthandle} class="fa-solid fa-trash"></i>
      </div>
      <div className="ContactDetails-logo">
        <i className="fa-solid fa-user"></i>
      </div>
      <div className="contact-name">
        <h1>
          {contact.firstName} {contact.lastName}
        </h1>
        <Link to={`/contact-edit/${id}`}>
          <i class="fa-solid fa-pen-to-square"></i>
        </Link>
      </div>
      <div className="mobile">
        <span> {contact.phoneNumber} </span>
        <i className="fa-solid fa-phone"></i>
      </div>
      <div className="email-address">
        <span> {contact.email} </span>
        <i className="fa-solid fa-envelope"></i>
      </div>
      <div className="address">
        <h3>Address:-</h3>
        <p>{contact.address}</p>
      </div>
    </div>
  );
}

export default ContactDetails;
