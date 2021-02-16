import { ProductWrapper } from "../styles";
import Item from "./Item";
import { useState } from "react";
import SearchBar from "./SearchBar";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import AddButton from "./buttons/AddButton";
import Loading from "./Loading";

const CamxProducts = () => {
  const products1 = useSelector((state) => state.products);
  const loading = useSelector((state) => state.loading);
  const [query, setQuery] = useState("");
  const filteredProducts = products1.filter((product) =>
    product.name.toLowerCase().includes(query.toLowerCase())
  );
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
      <ProductWrapper>
        {" "}
        <AddButton /> {productList}{" "}
      </ProductWrapper>
    </>
  );
};

export default CamxProducts;
