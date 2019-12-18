// Absolute Imports
import React from "react";
import { render } from "react-dom";

// Relative Imports
// import "./styles/normalize.css";
import AccountDetails from "./Components/Account";
import PersonalInfo from "./Components/Personalinfo";
import "./styles/style.css";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "account-information",
      name: "",
      email: "",
      password: ""
    };
  }
  handleNameChange = event => {
    this.setState({
      name: event.target.value
    });
    console.log(event);
  };
  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
  };
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };
  handlePage = page => {
    this.setState({
      activePage: page
    });
    // this.switchPage();
  };
  switchPage = () => {
    switch (this.state.activePage) {
      case "account-information":
        return (
          <AccountDetails
            handlePage={this.handlePage}
            nameValue={this.state.name}
            handleNameChange={this.handleNameChange}
          />
        );
        break;
      case "personal_information":
        return <PersonalInfo handlePage={this.handlePage} />;
        break;

      default:
        return <h1>default</h1>;
    }
  };
  render() {
    return <>{this.switchPage()}</>;
  }
}

render(<Index />, document.getElementById("root"));
