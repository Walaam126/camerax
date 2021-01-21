import camphoto from '../cameraxphotom.jpg';
import styles from '../styles';
const Home = () => {
    // home section
  return(
    <div>
      <h1 style={{textAlign:"center"}}>CameraX</h1>
      <h2 style={{textAlign:"center"}}>Find your amazing items</h2>
      <img style={styles.mainimag} src={camphoto} alt="camphoto" />
    {/* end of home section */}
      <br></br>
      {/* <div style={styles.product}>{produtslist}</div> */}
    </div>
  )
};

export default Home;