import axios from "axios";
import * as actionTypes from "./ActionType";
import toast from "react-hot-toast";

export const setContacts = (contacts) => ({
  type: actionTypes.SET_CONTACTS,
  payload: contacts,
});

export const addContactSuccess = (contact) => ({
  type: actionTypes.ADD_CONTACT,
  payload: contact,
});

export const updateContactSuccess = (contact) => ({
  type: actionTypes.UPDATE_CONTACT,
  payload: contact,
});
export const fetchContactByIdSuccess = (contact) => ({
  type: actionTypes.FETCH_CONTACT_BY_ID_SUCCESS,
  payload: contact,
});

export const deleteContactSuccess = (contactId) => ({
  type: actionTypes.DELETE_CONTACT,
  payload: contactId,
});

export const fetchContacts = () => async (dispatch) => {
  try {
    const response = await axios.get(
      "https://vengageai-task-1.onrender.com/api/contact"
    );
    console.log(response.data);
    dispatch(setContacts(response.data));
  } catch (error) {
    console.error("Error fetching contacts:", error);
  }
};

export const fetchContactById = (contactId) => async (dispatch) => {
  try {
    const response = await axios.get(
      `https://vengageai-task-1.onrender.com/api/contact/${contactId}`
    );
    dispatch(fetchContactByIdSuccess(response.data));
    console.log(response.data);
  } catch (error) {
    console.error(`Error fetching contact with ID ${contactId}:`, error);
  }
};

export const addContact = (contact) => {
  return async (dispatch) => {
    try {
      const response = await axios.post("https://vengageai-task-1.onrender.com/api/contact-add", contact);
      dispatch(addContactSuccess(response.data.contact));
      toast.success("New Contact Added !", {
        style: {
          borderRadius: "50px",
          background: "#000428",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
    } catch (error) {
      console.error("Error adding contact:", error);
    }
  };
};

export const updateContact = (id, contact) => {
  return async (dispatch) => {
    try {
      const response = await axios.patch(
        `https://vengageai-task-1.onrender.com/api/contact/${id}`,
        contact
      );
      dispatch(updateContactSuccess(response.data.contact));
      toast.success("Contact Updated !", {
        style: {
          borderRadius: "50px",
          background: "#000428",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
    } catch (error) {
      console.error("Error updating contact:", error);
    }
  };
};


export const deleteContact = (contactId) => {
  return async (dispatch) => {
    try {
      const response = await axios.delete(`https://vengageai-task-1.onrender.com/api/contact/${contactId}`);
      dispatch(deleteContactSuccess(contactId));
      toast.success("Contact Deleted !", {
        style: {
          borderRadius: "50px",
          background: "#000428",
          color: "#ffffff",
          padding: "1rem 1.5rem",
          fontWeight: "600",
        },
      });
      
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };
};
