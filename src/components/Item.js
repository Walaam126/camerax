import {ItemWrapper} from '../styles';
import DeleteButton from "./buttons/DeleteButton";

const Item = (props) => {
    return (
        <ItemWrapper>
        <img src={props.product.image} alt="camphoto" onClick={()=>props.setproduct(props.product)} /> 
        <h4>{props.product.name}</h4>
        <h4 className="itemPrice">{props.product.price}</h4>
        <DeleteButton productID={props.product.id} deleteProduct={props.deleteProduct}/>
      </ItemWrapper>
        );
};

export default Item;