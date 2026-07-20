import "./Header.css";
import logo from "../../../src/assets/logo-coder.png";

const Header = ({ title, subtitle }) => {
  return (
    <div className="header">
      <h1>{title}</h1>
      <h2>{subtitle}</h2>
      <img src={logo} alt="logo" width={100} />
    </div>
  );
};

export default Header;
