import { ProductWrapper } from '../styles';
import Item from "./Item";
import {useState} from "react";
import SearchBar from "./SearchBar";



const CamxProducts = (props) => {
  const [query, setQuery] = useState("");
  const filteredProducts = props.products.filter((product) => (
    product.name.toLocaleLowerCase().includes(query.toLocaleLowerCase())
  ));
  const productList = filteredProducts.map((product) => (
    <Item product={product} key={product.id} setproduct={props.setProduct} deleteProduct={props.deleteProduct} />

  ));
  return(
    <>
    <SearchBar setQuery={setQuery} />
      <ProductWrapper>{productList}</ProductWrapper>
  
    </>
  )
};

export default CamxProducts;