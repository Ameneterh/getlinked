import "./ContactPage.css";
import Header from "../Navigation/Header";
import Socials from "../CommonFiles/Socials";
import instagram from "../Images/mdi_instagram.png";
import twitter from "../Images/x-twitter.png";
import facebook from "../Images/facebook.png";
import linkedin from "../Images/linkedin-fill.png";

export default function ContactPage(props) {
  return (
    <div className="contact-page">
      <Header />
      <div className="contact">
        <div className="contact-left">
          <h1>Get in touch</h1>
          <p>
            Contact <span>Information</span>
          </p>
          <p>
            27,Alara Street <span>Yaba 100012 </span>Lagos State
          </p>
          <p>Call Us : 07067981819</p>
          <p>
            we are open from Monday-Friday <span>08:00am - 05:00pm</span>
          </p>

          <div className="social-icons">
            <span>Share on</span>
            <div>
              <Socials image={instagram} />
              <Socials image={twitter} />
              <Socials image={facebook} />
              <Socials image={linkedin} />
            </div>
          </div>
        </div>
        <div className="contact-right">
          <form className="form">
            <h3>
              Questions or need assistance?<span>Let us know about it!</span>
            </h3>
            <p className="show-only-mobile">
              Email us below to any question related to our event
            </p>
            <input
              className="input show-only-desktop"
              type="text"
              name="name"
              placeholder="First Name"
            />
            <input
              className="input show-only-mobile"
              type="text"
              name="team-name"
              placeholder="Team's Name"
            />
            <input
              className="input show-only-mobile"
              type="text"
              name="topic"
              placeholder="Topic"
            />
            <input
              className="input"
              type="email"
              name="email"
              placeholder="Mail"
            />
            <textarea
              className="input long-input"
              name="message"
              placeholder="Message"
            />
            <button type="submit" className="contact-btn">
              Submit
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
