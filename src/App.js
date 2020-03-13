import React from "react";

import "./App.css";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
import IndexMain from "./Components/IndexMain";
import ContactForm from "./Components/ContactForm";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <NavBar />
        <IndexMain />
        {/* <ContactForm /> */}
        <Footer />
      </header>
    </div>
  );
}

export default App;
