import React from "react";
import "./App.css";
import BoxWrapper from "./components/BoxWrapper/BoxWrapper.js";
import Contact from "./components/Contact/Contact.js";

class App extends React.Component {
  state = {
    items: []
  }

  


  render() {
    return (
      <div className="App">
        <BoxWrapper />
        <Contact />
      </div>
    );
  }
}

export default App;
