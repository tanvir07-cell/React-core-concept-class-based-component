import React from "react";
import "./App.css";
import Profile from "./components/profile/Profile";

class App extends React.Component {
  render() {
    /**
     * without jsx:
     */
    // return React.createElement("div", { className: "App" }, [
    //   React.createElement("h1", null, "Without jsx looks like this"),
    //   React.createElement(
    //     "p",
    //     null,
    //     "Babel convert this jsx to normal javaScript code"
    //   ),
    // ]);

    /**
     * with jsx
     */
    const name = "Tanvir Rifat";
    const bio = (
      <div>
        <h3>My name is {name}</h3>
        <p>Full Stack Web Developer | Js stack</p>
      </div>
    );
    // Welcome component:
    function Welcome({ name }) {
      return <p>Hello {name}</p>;
    }
    return (
      <>
        <div className="App">
          <Profile></Profile>
        </div>
      </>
    );
  }
}

export default App;
