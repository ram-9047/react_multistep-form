// Absolute Imports
import React from "react";
import { render } from "react-dom";

// Relative Imports
// import "./styles/normalize.css";
import AccountDetails from "./Components/Account";
import PersonalInfo from "./Components/Personalinfo";
import PaymentInfo from "./Components/Payment";
import "./styles/style.css";

class Index extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      activePage: "account-information",
      username: "",
      email: "",
      password: "",
      cardName: "",
      fullName: "",
      description: "",
      paymentMethod: "",
      cardNumber: "",
      expiryDate: ""
    };
  }
  handleNameChange = event => {
    this.setState({
      username: event.target.value
    });
    console.log(event.target.value);
  };
  handleEmailChange = event => {
    this.setState({
      email: event.target.value
    });
    console.log(event.target.value);
  };
  handlePasswordChange = event => {
    this.setState({
      password: event.target.value
    });
  };
  handleFullNameChange = event => {
    this.setState({
      fullName: event.target.value
    });
  };
  handleDescription = event => {
    this.setState({
      description: event.target.value
    });
  };
  handleCardNameChange = event => {
    this.setState({
      cardName: event.target.value
    });
  };
  handlePayment = event => {
    this.setState({
      paymentMethod: event.target.value
    });
  };
  handleCardNumberChange = event => {
    this.setState({
      cardNumber: event.target.value
    });
  };
  handleExpiryDate = event => {
    this.setState({
      expiryDate: event.target.value
    });
  };
  handlePage = page => {
    this.setState({
      activePage: page
    });
  };
  switchPage = () => {
    switch (this.state.activePage) {
      case "account-information":
        return (
          <AccountDetails
            handlePage={this.handlePage}
            nameValue={this.state.username}
            nameChange={this.handleNameChange}
            emailValue={this.state.email}
            emailChange={this.handleEmailChange}
            passwordValue={this.state.password}
            passwordChange={this.handlePasswordChange}
          />
        );
        break;
      case "personal_information":
        return (
          <PersonalInfo
            page={this.handlePage}
            fullName={this.state.fullName}
            handleFullNameChange={this.handleFullNameChange}
            description={this.state.description}
            handleDescription={this.handleDescription}
          />
        );
        break;
      case "payment-details":
        return (
          <PaymentInfo
            page={this.handlePage}
            cardName={this.state.cardName}
            handleCardNameChange={this.handleCardNameChange}
            payment={this.state.paymentMethod}
            handlePaymentChange={this.handlePayment}
            cardNumber={this.state.cardNumber}
            handleCardNumberChange={this.handleCardNumberChange}
            expiryDate={this.state.expiryDate}
            handleExpiryDate={this.handleExpiryDate}
          />
        );
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
