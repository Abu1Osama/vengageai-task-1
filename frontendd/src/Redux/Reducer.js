// reducers.js
import * as actionTypes from './ActionType';

const initialState = {
  contacts: [],
  selectedContact: null,
};

export const contactReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SET_CONTACTS:
      return { ...state, contacts: action.payload };
    case actionTypes.ADD_CONTACT:
      return { ...state, contacts: [...state.contacts, action.payload] };
    case actionTypes.UPDATE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.map((c) =>
          c._id === action.payload._id ? action.payload : c
        ),
      };
    case actionTypes.DELETE_CONTACT:
      return {
        ...state,
        contacts: state.contacts.filter((c) => c._id !== action.payload),
      };
      case actionTypes.FETCH_CONTACT_BY_ID_SUCCESS:
        return { ...state, selectedContact: action.payload };
  
    default:
      return state;
  }
};
