import { ProductWrapper } from "../styles";
import Item from "./Item";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import Loading from "./Loading";

const CamxProducts = ({ products1 }) => {
  const loading = useSelector((state) => state.productReducer.loading);
  const [query, setQuery] = useState("");
  const filteredProducts = products1.filter((product) => {
    if (product) {
      return product.name.toLowerCase().includes(query.toLowerCase());
    }
  });
  const productList = filteredProducts.map((product) => (
    <Item product={product} key={product.id} />
  ));
  return (
    <>
      <Helmet>
        <title>Products Page</title>
        <meta name="description" content="Nested component" />
        <Link to="/products"></Link>
      </Helmet>

      <SearchBar setQuery={setQuery} />
      {loading ? <Loading /> : true}
      <ProductWrapper> {productList}</ProductWrapper>
    </>
  );
};

export default CamxProducts;
