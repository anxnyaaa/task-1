import React from "react";
import Navbar from "./Components/Navbar";
import Sidebar from './Components/Sidebar';

import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar home= "Home" about= "About" review="Reviews" contact="Contacts"/>
      <Sidebar hello= "Hello" pd= "Portfolio" service = "Services" so="Sign out" />
    </div>
  );
}

export default App;
