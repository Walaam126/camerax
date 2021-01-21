import { ProductWrapper } from '../styles';
import products from '../products';
import Item from "./Item";

const CamxProducts = () => {
  const produtslist = products.map((product) => (
    <Item key={product.id} product={product}/>
  ));
  return(
      <ProductWrapper>{produtslist}</ProductWrapper>
  )
};

export default CamxProducts;