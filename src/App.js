import React from "react";
import "./App.css";
import Box from "./components/Box/Box.js";
import Contact from "./components/Contact/Contact.js";

class App extends React.Component {
  state = {
    items: []
  }


  render() {
    return (
      <div className="App">
        <Box />
        <Contact />
      </div>
    );
  }
}

export default App;
