import camphoto from './cameraxphotom.jpg';
import products from './products';
import styles from './styles';
{/* */}

function App() {

 
  const produtslist = products.map((product) => (
    <div>
      <img style={styles.listimg}src={product.image} alt="camphoto" /> 
      <h4>{product.name}</h4>
      <h4>{product.price}</h4>
    </div>
  ));
  return (
    <div>
      <h1 style={{textAlign:"center"}}>CameraX</h1>
      <h2 style={{textAlign:"center"}}>Find your amazing items</h2>
      <img style={styles.mainimag} src={camphoto} alt="camphoto" />
      <br></br>
      <div style={styles.product}>{produtslist}</div>
    </div>
  );
}

export default App;
