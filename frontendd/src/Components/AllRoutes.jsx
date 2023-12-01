import React from "react";
import Home from "../Pages/Home";
import ContactDetails from "./ContactDetails";
import { Route, Routes } from "react-router-dom";
import EditContact from "./EditContact";

function AllRoutes() {
  return (
    <div>
      <Routes>
        <Route path={"/"} element={<Home />} />
        <Route path={"/contact-details/:id"} element={<ContactDetails />} />
        <Route path={"/contact-edit/:id"} element={<EditContact />} />
      </Routes>
    </div>
  );
}

export default AllRoutes;
