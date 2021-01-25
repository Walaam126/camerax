import Home from './components/Home';
import CamxProducts from './components/CamxProducts';
import ProductDetail from './components/ProductDetail';
import { GlobalStyle, ThemeButton } from './styles';
import { ThemeProvider } from "styled-components";
import {useState} from "react";
import products from './products';
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

  let [_products, set_products] = useState(products);
  const deleteProduct = (productID) => {
    const filteredProducts = _products.filter((product) => product.id !== productID)
    setProduct(null);
    set_products(filteredProducts);
};


let [product,setProduct]=useState(null);
const setView=()=>{
if (product) return < ProductDetail product={product} key={product.id} setProduct={setProduct} deleteProduct={deleteProduct}/>
  else return <CamxProducts setProduct={setProduct} products={_products} deleteProduct={deleteProduct} />
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

    <ThemeProvider theme={theme[currentTheme]}>
    
    <GlobalStyle />
    <ThemeButton onClick={toggleCurrentTheme}>
        {buttontitle}
      </ThemeButton>
    <Home />
    {setView()}
    </ThemeProvider>
  );
}

export default App;
