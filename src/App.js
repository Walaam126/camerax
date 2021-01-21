import Home from './components/Home';
import CamxProducts from './components/CamxProducts';
import { GlobalStyle } from './styles';
import { ThemeProvider } from "styled-components";
function App() {
  const theme = {
    mainColor: "#9C4F30",
    backgroundColor: "#E7D8C9",
    blue: "#389494"
  };

  
  return (
    <ThemeProvider theme={theme}>
    <GlobalStyle />
    <Home />
    <CamxProducts />
    </ThemeProvider>
  );
}

export default App;
