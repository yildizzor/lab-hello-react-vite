import IronhackLogo from "./Ironhack";
import Menu from "./menu";
import Text from "./Text";
import "./navbar.css";

function Navbar() {
  return (
    <div className="landing-page">
      <nav className="navigation">
        <IronhackLogo />
        <Menu />
      </nav>
      <div>
      <Text />
      </div>
    
    </div>
  );
}

export default Navbar;
