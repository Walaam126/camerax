import { BiEdit } from 'react-icons/bi'
import { Link } from "react-router-dom";


const UpdateButton = (props) => {
      return(
        <>
       <Link to={`/products/${props.product.slug}/edit`}>
                  <BiEdit />
         </Link>
        </>
      )
    };
    
    export default  UpdateButton;