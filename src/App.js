import Home from './components/Home';
import products from './products';
import NavBar from "./components/NavBar";
import CamxProducts from './components/CamxProducts';
import ProductDetail from './components/ProductDetail';
import { GlobalStyle, ThemeButton } from './styles';
import { ThemeProvider } from "styled-components";
import {useState} from "react";
import { Helmet} from 'react-helmet';
import { Link } from "react-router-dom";
import { Route, Switch } from "react-router";
function App() {
let [currentTheme,setCurrentTheme]=useState("light");
let [buttontitle,setbuttontitle]=useState("Dark Theme");
const toggleCurrentTheme =()=>{
if (currentTheme==="light"){
  setCurrentTheme("dark");
  setbuttontitle("Light Theme");
} else{
  setCurrentTheme("light")
  setbuttontitle("Dark Theme");
}
}  
  
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
     
          <Route path="/products/:productSlug" >
          <ProductDetail />
        </Route>
        
          <Route path="/products" >
          <CamxProducts />
          </Route>
           
        <Route exact path="/">
          <Home />
            </Route>
       
      </Switch>
      </ThemeProvider>
      </>
  );
}

export default App;
