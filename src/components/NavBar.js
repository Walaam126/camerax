// Styling
import { ThemeButton } from "../styles";
import { Link} from "react-router-dom";
import {Logo,NavProduct} from '../styles';
const NavBar = (props) => {
  return (
    <nav className="navbar navbar-expand">
          
         <Logo  className="navbar-brand" to="/">  
          <img src={"https://www.clker.com/cliparts/0/x/c/5/2/d/cam-red-black-hi.png"} alt="camphoto" />
          </Logo>
          
          <div className="navbar-nav ml-auto">
           
       <NavProduct to="/products" className="nav-item" style={{ padding: "1.5em 1em" }}>Products</NavProduct  >
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
