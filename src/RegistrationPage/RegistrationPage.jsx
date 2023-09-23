import "./RegistrationPage.css";
import Header from "../Navigation/Header";
import regpageimage from "../Images/3d-graphic-designer-showing-thumbs-up-png 1.png";
import RegistrationModal from "./RegistrationModal";
import { useState } from "react";

export default function RegistrationPage(props) {
  const [openModal, setOpenModal] = useState(false);

  function OpenModal(e) {
    e.preventDefault();
    setOpenModal(!openModal);
  }

  function CloseModal() {
    setOpenModal(false);
  }

  return (
    <div className="registration-page">
      <Header />
      <div className="registration">
        <h1>Register</h1>
        <div className="registration-left">
          <img
            src={regpageimage}
            alt="3d-graphic-designer-showing-thumbs-up-png"
          />
        </div>

        <div className="registration-right">
          <form className="form">
            <h1>Register</h1>
            <p className="form-p">Be part of this movement!</p>
            <h3>CREATE YOUR ACCOUNT</h3>

            <div className="reg-input-div">
              <span>
                <label for="team-name">Team's Name</label>
                <input
                  className="input"
                  type="text"
                  name="team-name"
                  placeholder="Enter the name of your group"
                />
              </span>
              <span>
                <label for="phone">Phone</label>
                <input
                  className="input"
                  type="text"
                  name="phone"
                  placeholder="Enter your phone number"
                />
              </span>
            </div>

            <div className="reg-input-div">
              <span>
                <label for="email">Email</label>
                <input
                  className="input"
                  type="email"
                  name="email"
                  placeholder="Enter your email address"
                />
              </span>
              <span>
                <label for="project-topic">Project Topic</label>
                <input
                  className="input"
                  type="text"
                  name="project-topic"
                  placeholder="What is your group project topic"
                />
              </span>
            </div>

            <div className="reg-input-div-3">
              <span className="reg-input-div-3L">
                <label for="category">Category</label>
                <input
                  className="input"
                  type="text"
                  name="category"
                  placeholder="Select your category"
                />
              </span>
              <span className="reg-input-div-3R">
                <label for="group-size">Group Size</label>
                <input
                  className="input"
                  type="text"
                  name="group-size"
                  placeholder="Select"
                />
              </span>
            </div>

            <span>
              <p className="reg-span-p">
                Please review your registration details before submitting
              </p>
              <span className="checkbox-for-terms">
                <input type="checkbox" name="t&c" />
                <label for="t&c">
                  {" "}
                  I agreed with the event terms and conditions and privacy
                  policy
                </label>
              </span>
            </span>

            <button
              type="submit"
              className="registration-btn"
              onClick={OpenModal}
            >
              Submit
            </button>
            {openModal && <RegistrationModal />}
          </form>
        </div>
      </div>
    </div>
  );
}
