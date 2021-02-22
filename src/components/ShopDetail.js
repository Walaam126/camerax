import { DetailWrapper } from "../styles";
import { useParams, Redirect } from "react-router-dom";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import CamxProducts from "./CamxProducts";
import { BiPlusCircle } from "react-icons/bi";

const ShopDetail = () => {
  const allProducts = useSelector((state) => state.productReducer.products);
  const shops = useSelector((state) => state.shopReducer.shops);
  const { shopSlug } = useParams();
  const Shop = shops.find((shop) => shop.slug === shopSlug);
  if (!Shop) {
    return <Redirect to="/shops" />;
  }
  const products1 = Shop.products.map((product) =>
    allProducts.find((_product) => _product.id === product.id)
  );

  return (
    <>
      <DetailWrapper>
        <h1>{Shop.name}</h1>
        <img src={Shop.image} alt="camphoto" />
        {/* <Link to="/shops">
          <button className="btn btn-primary">Back</button>
        </Link>{" "} */}
      </DetailWrapper>
      <Link to={`/shops/${Shop.id}/products/addproduct`}>
        <BiPlusCircle />
      </Link>
      <CamxProducts products1={products1} />
    </>
  );
};

export default ShopDetail;
