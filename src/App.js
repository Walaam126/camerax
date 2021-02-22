import Home from "./components/Home";
import NavBar from "./components/NavBar";
import CamxProducts from "./components/CamxProducts";
import ProductDetail from "./components/ProductDetail";
import ProductForm from "./components/ProductForm";
import { GlobalStyle, ThemeButton } from "./styles";
import { ThemeProvider } from "styled-components";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import CamxShops from "./components/CamxShops";
import ShopDetail from "./components/ShopDetail";
import SignUp from "./components/SignUp";
import SignIn from "./components/SignIn";
import Cookies from "js-cookie";
function App() {
  const products1 = useSelector((state) => state.productReducer.products);
  let [currentTheme, setCurrentTheme] = useState(
    Cookies.get("theme") ? Cookies.get("theme") : "light"
  );
  let [buttontitle, setbuttontitle] = useState("Dark Theme");
  const toggleCurrentTheme = () => {
    if (currentTheme === "light") {
      setCurrentTheme("dark");
      setbuttontitle("Light Theme");
      Cookies.set("theme", "dark");
    } else {
      setCurrentTheme("light");
      setbuttontitle("Dark Theme");
      Cookies.set("theme", "light");
    }
  };

  const theme = {
    light: {
      mainColor: "#242424", // main font color
      backgroundColor: "#fefafb", // main background color
      pink: "#ff85a2",
      red: "#ff3232",
      blue: "#389494",
    },
    dark: {
      mainColor: "#fefafb", // main font color
      backgroundColor: "#242424", // main background color
      pink: "#ff85a2",
      red: "#ff3232",
      blue: "#389494",
    },
  };

  return (
    <>
      <div>
        <Helmet>
          <title>Home</title>
          <Link to="/"></Link>
          <meta name="description" content="Helmet application" />
        </Helmet>
      </div>

      <ThemeProvider theme={theme[currentTheme]}>
        <GlobalStyle />
        <NavBar currentTheme={currentTheme} toggleTheme={toggleCurrentTheme} />
        <Switch>
          <Route path="/signin">
            <SignIn />
          </Route>
          <Route path="/signup">
            <SignUp />
          </Route>
          <Route
            path={[
              "/shops/:shopId/products/addproduct",
              "/products/:productSlug?/edit",
            ]}
          >
            <ProductForm />
          </Route>
          <Route path="/products/:productSlug">
            <ProductDetail />
          </Route>
          <Route path="/products">
            <CamxProducts products1={products1} />
          </Route>
          <Route path="/shops/:shopSlug">
            <ShopDetail />
          </Route>
          <Route path="/shops">
            <CamxShops />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </ThemeProvider>
    </>
  );
}

export default App;
