import React from "react";

export default function payment(props) {
  return (
    <>
      <div className="flex">
        <img
          src="images/add_user.png"
          alt="add_user"
          className="add-user"
        ></img>
        <h3>Create account for full-access</h3>
      </div>
      <hr className="dotted-line" />
      <div className="flex">
        <div className="flex details">
          <span className="details-list">
            <img
              src="images/check-mark.png"
              alt="check-mark icon"
              className="check-mark-icon"
            ></img>
          </span>
          <h4>Account Information</h4>
        </div>
        <div className="flex details">
          <span className="details-list">
            <img
              src="images/check-mark.png"
              alt="check-mark icon"
              className="check-mark-icon"
            ></img>
          </span>
          <h4>Personal Information</h4>
        </div>
        <div className="flex details">
          <span className="details-list">3</span>
          <h4>Payment Details</h4>
        </div>
      </div>
      <hr className="dotted-line" />
      <div>
        <form className="form">
          <label className="name-box">
            Name on the Card:
            <input
              type="text"
              value={props.cardName}
              onChange={props.handleCardNameChange}
              className="input-box"
            />
          </label>
          <br />
          <label className="payment-box">
            Payment Method:
            <input
              type="text"
              value={props.payment}
              onChange={props.handlePaymentChange}
              className="input-box"
            />
          </label>
          <br />
          <label className="card-number-box">
            Card Number:
            <input
              type="number"
              value={props.cardNumber}
              onChange={props.handleCardNumberChange}
              className="input-box"
            />
          </label>
          <br />
          <label className="expiry-box">
            Expiry Date:
            <input
              type="date"
              value={props.expiryDate}
              onChange={props.handleExpiryDate}
              className="input-box"
            />
          </label>
        </form>
      </div>
      <hr className="dotted-line" />
      <footer>
        <span
          onClick={() => props.page("personal_information")}
          className="prev-btn"
        >
          previous
        </span>
      </footer>
    </>
  );
}
