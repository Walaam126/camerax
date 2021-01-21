import camphoto from '../cameraxphotom.jpg';
import {HomeWrapper} from '../styles';
const Home = () => {
    // home section
  return(
    <HomeWrapper>
      <h1>CameraX</h1>
      <h2>Find your amazing items</h2>
      <img src={camphoto} alt="camphoto" />
      <br></br>
    </HomeWrapper>
  )
};

export default Home;