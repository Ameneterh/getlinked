// import { Link } from "react-router-dom";
import "./Header.css";

export default function Header(props) {
  return (
    <div className="header-container">
      <div className="header-title">
        <h1>
          get<span>linked</span>
        </h1>
      </div>
      <nav className="nav-link">
        {/* <ul>
          <li></li>
          <li>Overview</li>
          <li>FAQs</li>
          <li>Contact</li>
        </ul> */}
      </nav>
    </div>
  );
}
