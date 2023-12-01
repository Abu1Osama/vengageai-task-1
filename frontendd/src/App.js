import logo from "./logo.svg";
import "./App.css";
import ContactList from "./Components/ContactList";
import AddContactButton from "./Components/AddContactButton";
import AllRoutes from "./Components/AllRoutes";
import { Toaster } from 'react-hot-toast';

function App() {


  return (
    <>
    <AllRoutes/>
      <AddContactButton/>
      <Toaster/>
    </>
  );
}

export default App;
