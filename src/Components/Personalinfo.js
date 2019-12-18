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
            <div className="country">
              <span>Country</span>
              <select className="input-box">
                <option selected value="Select Country">
                  Select Country
                </option>
                <option value="India">India</option>
                <option value="Rusia">Russia</option>
                <option value="Japan">Japan</option>
                <option value="UK">UK</option>
              </select>
            </div>
            <br />
            <span className="flex gender">
              <p>Gender:</p>
              <th className="btn">
                <button className="male-btn">
                  <img
                    src="images/man.png"
                    alt="man-icon"
                    className="man-icon"
                  ></img>{" "}
                  Male
                </button>
                <button className="female-btn">
                  <img
                    src="images/woman.png"
                    alt="man-icon"
                    className="man-icon"
                  ></img>{" "}
                  Female
                </button>
              </th>
            </span>
            <br />
            <label className="flex description">
              About You:
              <textarea rows="6" cols="40">
                Leave your message here about enquiry
              </textarea>
            </label>
          </form>
        </div>
        <hr className="dotted-line" />
        <footer className="footer1">
          <button
            onClick={() => props.page("account-information")}
            className="prev-btn"
          >
            previous
          </button>
          <button
            className="next-btn"
            onClick={() => props.page("payment-details")}
          >
            Next Step
          </button>
        </footer>
      </div>
    </>
  );
}
