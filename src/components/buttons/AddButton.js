import { BiPlusCircle } from 'react-icons/bi'
import { Link } from "react-router-dom";


const AddButton = () => {
      return(
        <>
       <Link to="/products/Addproduct">
                  <BiPlusCircle />
         </Link>
        </>
      )
    };
    
    export default  AddButton;