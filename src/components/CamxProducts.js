import styles from '../styles';
import products from '../products';
import Item from "./Item";
const CamxProducts = () => {
  const produtslist = products.map((product) => (
    <Item key={product.id} product={product}/>
    // <div>
    //   <img style={styles.listimg}src={product.image} alt="camphoto" /> 
    //   <h4>{product.name}</h4>
    //   <h4>{product.price}</h4>
    // </div>
  ));
  return(
      <div style={styles.product}>{produtslist}</div>
  )
};

export default CamxProducts;