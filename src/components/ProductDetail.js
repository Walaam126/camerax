import { DetailWrapper } from "../styles";
import DeleteButton from "./buttons/DeleteButton";
import UpdateButton from "./buttons/UpdateButton";
import { useParams, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const ProductDetail = () => {
  const products1 = useSelector((state) => state.productReducer.products);
  const { productSlug } = useParams();
  const Product = products1.find((product) => product.slug === productSlug);
  if (!Product) {
    return <Redirect to="/products" />;
  }
  return (
    <DetailWrapper>
      <h1>{Product.name}</h1>
      <img src={Product.image} alt="camphoto" />
      <p>{Product.description}</p>
      <p>{Product.price} BHD</p>
      <Link to="/products">
        <button className="btn btn-primary">Back</button>
      </Link>{" "}
      <UpdateButton product={Product} /> <DeleteButton productID={Product.id} />
    </DetailWrapper>
  );
};

export default ProductDetail;
