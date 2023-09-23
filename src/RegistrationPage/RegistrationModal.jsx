import "./RegistrationModal.css";
import congratulations from "../Images/congratulation.png";

export default function RegistrationModal(props) {
  return (
    <div className="registration-modal">
      <div className="modal">
        <img src={congratulations} alt="congratulations" />
        <h3>
          Congratulations<span>you have successfully Registered!</span>
        </h3>
        <p>
          Yes, it was easy and you did it!
          <span>check your mail box for next step</span>
        </p>
        <button className="go-back">Back</button>
      </div>
    </div>
  );
}
