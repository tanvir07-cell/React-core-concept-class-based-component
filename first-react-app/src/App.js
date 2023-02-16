import React from "react";
import "./App.css";
import Bio from "./components/profile/Bio";
import Profile from "./components/profile/Profile";
import Skills from "./components/profile/Skills";
import MyProps from "./components/props";

class Child extends React.Component {
  render() {
    this.props.func(this);
    return <p>I am the child component</p>;
  }
}

class App extends React.Component {
  // using state in the class component:
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  // passing function as a props to the children:
  getContext(context) {
    console.log(context);
  }
  render() {
    this.getContext(this);
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
          {/* <MyProps name="Tanvir Rifat"></MyProps>
          <MyProps name="HM Nayeem"></MyProps> */}
          <div style={{ width: "50%", margin: "20px auto" }}>
            <h4>List of programmers</h4>
            <Bio
              name="HM nayeem"
              title="Full Stack Developer,Enterprenuor"
            ></Bio>
            <Skills
              style={{ textAlign: "center" }}
              skillA="Angular"
              skillB="Vue"
              skillC="Go"
            ></Skills>
          </div>

          <Child func={this.getContext}></Child>
          <h3>Count : {this.state.count}</h3>

          <button
            onClick={() => this.setState({ count: this.state.count + 1 })}
          >
            Increment
          </button>
        </div>
      </>
    );
  }
}

export default App;
