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
        <h3>Sign-up to create account</h3>
      </div>
      <hr className="dotted-line" />
      <div className="flex">
        <div className="flex details">
          <span className="details-list">1</span>
          <h4>Account Information</h4>
        </div>
        <div className="flex details">
          <span className="details-list">2</span>
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
            Name on the Card
            <input
              type="text"
              //   value={props.nameValue.name}
              //   onChange={props.handleNameChange.handleNameChange}
              className="input-box"
            />
          </label>
          <br />
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
        {/* <button
          className="next-btn"
          //   onClick={() => props.handlePage("payment-details")}
        >
          Next Step
        </button> */}
      </footer>
    </>
  );
}
