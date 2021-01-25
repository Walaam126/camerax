
import { BiTrash } from 'react-icons/bi'

const DeleteButton = (props) => {
    const handleDelete = () => {
        props.deleteProduct(props.productID);
 }
    return(
      <>
    
            <BiTrash onClick={handleDelete} />
      </>
    )
  };
  
  export default  DeleteButton;