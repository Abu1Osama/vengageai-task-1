import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import "../Styles/ContactList.scss";
import { useDispatch, useSelector } from "react-redux";
import { fetchContacts } from "../Redux/action";

function ContactList() {
  const contactsss = useSelector((store) => store.contactReducer.contacts);
  console.log(contactsss);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <div id="ContactList" className="ContactList">
      <div className="search-container">
        <input
          type="text"
          placeholder="Search contacts..."
          //   value={searchTerm}
          //   onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      {contactsss.map((item) => (
        <Link
          to={`/contact-details/${item._id}`}
          key={item.id}
          className="contact-data"
        >
          <div className="logo">
            <i className="fa-solid fa-user"></i>
          </div>
          <div className="content">
            <h3>{item.firstName + " " + item.lastName}</h3>
            <strong>{item.phoneNumber}</strong>
          </div>
          <div className="forward-ico">
            <i class="fa-solid fa-angle-right"></i>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ContactList;