import { ItemWrapper } from "../styles";
import { Link } from "react-router-dom";

const ShopItem = ({ shop }) => {
  return (
    <ItemWrapper>
      <Link to={`/shops/${shop.slug}`}>
        <img src={shop.image} alt="camphoto" />
      </Link>
      <h4>{shop.name}</h4>
    </ItemWrapper>
  );
};

export default ShopItem;
