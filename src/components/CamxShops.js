import { ProductWrapper } from "../styles";
import Item from "./Item";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { useSelector } from "react-redux";
import ShopItem from "./ShopItem";
const CamxShops = () => {
  const shops = useSelector((state) => state.shopReducer.shops);
  const [query, setQuery] = useState("");
  const filteredShops = shops.filter((shop) =>
    shop.name.toLowerCase().includes(query.toLowerCase())
  );
  const shopsList = filteredShops.map((shop) => (
    <ShopItem shop={shop} key={shop.id} />
  ));
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <ProductWrapper> {shopsList} </ProductWrapper>
    </>
  );
};

export default CamxShops;
