import { DetailWrapper } from "../styles";

const ProductDetail = (props) => {
    const back =()=>{
    if(props.product) {props.setProduct(null)};
    }
  return (
    <DetailWrapper>
      <h1>{props.product.name}</h1>
      <img src={props.product.image} alt="camphoto" /> 
      <p>{props.product.description}</p>
      <p>{props.product.price}</p>
      <button onClick={back}>Show All</button>
    </DetailWrapper>
  );
};

export default ProductDetail;