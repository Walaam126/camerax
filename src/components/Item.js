import {ItemWrapper} from '../styles';
const Item = (props) => {
    return (
        <ItemWrapper>
        <img src={props.product.image} alt="camphoto" /> 
        <h4>{props.product.name}</h4>
        <h4 className="itemPrice">{props.product.price}</h4>
      </ItemWrapper>
        );
};

export default Item;