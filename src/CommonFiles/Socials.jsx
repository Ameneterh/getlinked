import "./Socials.css";

export default function Socials(props) {
  return (
    <div
      className="social"
      style={{ backgroundImage: `url(${props.image})` }}
    ></div>
  );
}
