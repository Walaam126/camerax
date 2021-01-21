import styles from '../styles';
import products from '../products';
import Item from "./Item";
const CamxProducts = () => {
  const produtslist = products.map((product) => (
    <Item key={product.id} product={product}/>
  ));
  return(
      <div style={styles.product}>{produtslist}</div>
  )
};

export default CamxProducts;