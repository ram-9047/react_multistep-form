import React from "react";

export default function AccountDetails(props) {
  return (
    <>
      {/* !!!!!!!!!--------------first---page---------!!!!!!!!!!!!!!!!!!! */}
      <div>
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
              Username:
              <input
                type="text"
                value={props.nameValue.name}
                onChange={props.handleNameChange.handleNameChange}
                className="input-box"
              />
            </label>
            <br />
            <label className="email-box">
              Email:
              <input
                type="text"
                // value={this.state.email}
                // onChange={this.handleEmailChange}
                className="input-box"
              />
            </label>
            <br />
            <label className="password-box">
              Password:
              <input
                type="text"
                // value={this.state.password}
                // onChange={this.handlePasswordChange}
                className="input-box"
              />
            </label>
            <br />
            <label className="avatar-box">
              Select Avatar:
              <input
                type="file"
                // value={this.state.name}
                // onChange={this.handleChange}
                className="input-box"
              />
            </label>
          </form>
        </div>
        <hr className="dotted-line" />
        <footer>
          <button
            className="next-btn"
            onClick={() => props.handlePage("personal_information")}
          >
            Next Step
          </button>
        </footer>
      </div>
    </>
  );
}
