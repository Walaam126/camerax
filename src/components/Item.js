import {ItemWrapper} from '../styles';
import {useState} from "react";


const Item = (props) => {
const [currentimg,setimg]=useState(props.product.image);
    return (
        <ItemWrapper>
        <img src={props.product.image} alt="camphoto" onClick={()=>props.setproduct(props.product)} /> 
        <h4>{props.product.name}</h4>
        <h4 className="itemPrice">{props.product.price}</h4>
       {/* photo challenge */}
        {/* <img
    src={currentimg}
    onMouseOver={e => (e.currentTarget.src = "https://finepix-x100.com/wp-content/uploads/2020/08/0fujifilm_x_t2.jpg")}
    onMouseOut={x=>(x.currentTarget.src = "https://www.42photo.com/images/products/prod_l/97590_l_85d.jpg")}
  /> */}
      </ItemWrapper>
        );
};

export default Item;