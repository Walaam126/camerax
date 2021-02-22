// Styling
import { ThemeButton } from "../styles";
import { Link } from "react-router-dom";
import { Logo, NavProduct } from "../styles";
import { useSelector } from "react-redux";
import { signout } from "../store/actions/authAction";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const NavBar = (props) => {
  const user = useSelector((state) => state.authReducer.user);
  const history = useHistory();
  const dispatch = useDispatch();
  const usersignout = () => {
    dispatch(signout());
    history.push("/");
  };
  return (
    <nav className="navbar navbar-expand">
      <Logo className="navbar-brand" to="/">
        <img
          src={
            "https://www.clker.com/cliparts/0/x/c/5/2/d/cam-red-black-hi.png"
          }
          alt="camphoto"
        />
      </Logo>

      <div className="navbar-nav ml-auto">
        {user ? (
          <>
            <p style={{ padding: "1.5em 1em" }}> {user.username}</p>
            <button className="btn btn-light" onClick={usersignout}>
              logout
            </button>
          </>
        ) : (
          <>
            <NavProduct
              to="/signin"
              className="nav-item"
              style={{ padding: "1.5em 1em" }}
            >
              Sign in
            </NavProduct>
            <NavProduct
              to="/signup"
              className="nav-item"
              style={{ padding: "1.5em 1em" }}
            >
              Sign up
            </NavProduct>
          </>
        )}
        <NavProduct
          to="/shops"
          className="nav-item"
          style={{ padding: "1.5em 1em" }}
        >
          Shops
        </NavProduct>
        <NavProduct
          to="/products"
          className="nav-item"
          style={{ padding: "1.5em 1em" }}
        >
          Products
        </NavProduct>
        <ThemeButton className="nav-item" onClick={props.toggleTheme}>
          {props.currentTheme === "light" ? "Dark" : "Light"} Mode
        </ThemeButton>
      </div>
    </nav>
  );
};

export default NavBar;
