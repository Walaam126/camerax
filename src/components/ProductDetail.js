import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
const ProductDetail = (props) => {
    // const back =()=>{
    // if(props.product) {props.setProduct(null)};
    // }
  return (
    <DetailWrapper>
      <h1>{props.product.name}</h1>
      <img src={props.product.image} alt="camphoto" /> 
      <p>{props.product.description}</p>
      <p>{props.product.price}</p>
      <button onClick={() => props.setProduct(null)}>Show All</button>
      <DeleteButton productID={props.product.id} deleteProduct={props.deleteProduct} setProduct={props.setProduct}/>
    </DetailWrapper>
  );
};

export default ProductDetail;