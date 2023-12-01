import React, { useState } from "react";
import "../Styles/AddContactButton.scss"
import AddContact from "./AddContact";

function AddContactButton() {
    const [addcontactb,setAddcontactb]=useState(false)
    const openform=()=>{
        setAddcontactb(true)
    }
    const closeform=()=>{
        setAddcontactb(false)
    }
  return (
    <>
    <div className="AddContactButton" id="AddContactButton">
      <i onClick={openform} class="fa-solid fa-plus"></i>
    </div>
    {addcontactb&&<AddContact closeform={closeform}/>}
    </>
  );
}

export default AddContactButton;
