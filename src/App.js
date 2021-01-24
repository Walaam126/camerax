import Home from './components/Home';
import CamxProducts from './components/CamxProducts';
import { GlobalStyle, ThemeButton } from './styles';
import { ThemeProvider } from "styled-components";
import {useState} from "react";
function App() {
let [currentTheme,setCurrentTheme]=useState("light");
let [buttontitle,setbuttontitle]=useState("Dark Theme");
const toggleCurrentTheme =()=>{
if (currentTheme==="light"){
  setCurrentTheme(currentTheme="dark");
  setbuttontitle(buttontitle="Light Theme");
} else{
  setCurrentTheme(currentTheme="light")
  setbuttontitle(buttontitle="Dark Theme");
}
}
  // const theme = {
  //   mainColor: "#9C4F30",
  //   backgroundColor: "#E7D8C9",
  //   blue: "#389494"
  // };
  
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

    <ThemeProvider theme={theme[currentTheme]}>
    
    <GlobalStyle />
    <ThemeButton onClick={toggleCurrentTheme}>
        {buttontitle}
      </ThemeButton>
    <Home />
    <CamxProducts />
    </ThemeProvider>
  );
}

export default App;
