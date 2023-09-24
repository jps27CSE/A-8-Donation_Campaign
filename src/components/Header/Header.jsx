import { NavLink } from "react-router-dom";
import Logo from "../../assets/Logo.png";

const Header = () => {
  const HeadingSection = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/donation">Donation</NavLink>
      </li>
      <li>
        <NavLink to="/statistics">Statistics</NavLink>
      </li>
    </>
  );

  return (
    <div className="max-w-6xl mx-auto mt-2">
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <img className="w-48" src={Logo} alt="logo" />
        </div>
        <div className="flex-none">
          <ul className="menu menu-horizontal px-1">{HeadingSection}</ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
