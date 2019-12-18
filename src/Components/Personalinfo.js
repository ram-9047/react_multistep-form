import React from "react";

export default function personalInfo(props) {
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
          <h3>Create account for full-access</h3>
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
              Full-Name:
              <input
                type="text"
                // value={this.state.fullName}
                // onChange={this.handleChange}
                className="input-box"
              />
            </label>
            <br />
            <div>
              <span>Country</span>
              <select>
                <option selected value="Select Country">
                  Select Country
                </option>
                <option value="India">India</option>
                <option value="Rusia">Russia</option>
                <option value="Japan">Japan</option>
                <option value="UK">UK</option>
              </select>
            </div>
          </form>
        </div>
        <hr className="dotted-line" />
        <footer>
          <button
            className="next-btn"
            onClick={() => props.handlepage("payment-details")}
          >
            Next Step
          </button>
        </footer>
      </div>
    </>
  );
}
