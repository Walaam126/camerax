import {ItemWrapper} from '../styles';
import DeleteButton from "./buttons/DeleteButton";
import { Link} from "react-router-dom";
const Item = (props) => {
    return (
        <ItemWrapper>
        <Link to={`/products/${props.product.slug}`}>
        <img src={props.product.image} alt="camphoto"/> 
        </Link>
        <h4>{props.product.name}</h4>
        <h4 className="itemPrice">{props.product.price}</h4>
        <DeleteButton productID={props.product.id}/>
      </ItemWrapper>
        );
};

export default Item;