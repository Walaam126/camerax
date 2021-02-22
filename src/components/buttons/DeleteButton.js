import { BiTrash } from "react-icons/bi";
import { deleteProduct } from "../../store/actions/productAction";
import { useDispatch } from "react-redux";
const DeleteButton = (props) => {
  const dispatch = useDispatch();
  return (
    <>
      <BiTrash onClick={() => dispatch(deleteProduct(props.productID))} />
    </>
  );
};

export default DeleteButton;
