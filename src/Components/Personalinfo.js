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
                value={props.fullName}
                onChange={props.handleFullNameChange}
                className="input-box"
              />
            </label>
            <br />
            <div className="country">
              <span>Country</span>
              <select className="input-box" onClick={props.handleCountry}>
                <option
                  selected
                  // value="Select Country"
                >
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
              {/* <th className="btn">
                <input
                  type="radio"
                  className="male-btn"
                  name="male"
                  onClick={props.handleGender}
                >
                  <img
                    src="images/man.png"
                    alt="man-icon"
                    className="man-icon"
                  ></img>{" "}
                  Male
                </input>
                <input
                  type="radio"
                  className="female-btn"
                  name="female"
                  onClick={props.handleGender}
                >
                  <img
                    src="images/woman.png"
                    alt="man-icon"
                    className="man-icon"
                  ></img>
                  Female
                </input>
              </th> */}
              <span className="btn">
                {" "}
                Male
                <input
                  type="radio"
                  value="male"
                  onClick={props.handleGender}
                ></input>
              </span>
              <br></br>
              <span className="btn">
                Female
                <input
                  type="radio"
                  value="female"
                  onClick={props.handleGender}
                ></input>
              </span>
            </span>
            <br />
            <label className="flex description">
              About You:
              <textarea
                rows="6"
                cols="40"
                value={props.description}
                onChange={props.handleDescription}
              >
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
