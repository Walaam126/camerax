import { useState } from "react";
import { createProduct, updateProduct } from "../store/actions/productAction";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";

const ProductForm = () => {
  const products = useSelector((state) => state.productReducer.products);
  const { productSlug, shopId } = useParams();
  const _product = products.find((product) => product.slug === productSlug);

  const history = useHistory();
  const dispatch = useDispatch();
  const [product, setProduct] = useState({
    shopId: _product ? _product.shopId : shopId,
    name: _product ? _product.name : "",
    price: _product ? _product.price : "",
    image: _product ? _product.image : "",
    description: _product ? _product.description : "",
  });

  const handleChange = (event) =>
    setProduct({
      ...product,
      [event.target.name]: event.target.value,
    });
  const handleImage = (event) => {
    setProduct({ ...product, image: event.target.files[0] });
  };
  const resetForm = () => {
    setProduct({
      name: "",
      price: "",
      image: "",
      description: "",
    });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    if (_product) {
      product.id = _product.id;
      product.slug = _product.slug;
      dispatch(updateProduct(product));
      // history.push("/products");
    } else {
      dispatch(createProduct(product));
      resetForm();
    }
    // history.push("/products");
    history.goBack();
  };

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <h2> {_product ? "Update" : "Add"} Product</h2>
            <br></br>
            <form onSubmit={handleSubmit}>
              <div className="form-outline mb-4">
                <label className="form-label" for="form4Example1">
                  Name
                </label>
                <input
                  type="text"
                  id="form4Example1"
                  className="form-control"
                  name="name"
                  onChange={handleChange}
                  value={product.name}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form4Example2">
                  Price
                </label>
                <input
                  type="number"
                  id="form4Example2"
                  className="form-control"
                  name="price"
                  onChange={handleChange}
                  value={product.price}
                />
              </div>
              <div className="form-outline mb-4">
                <label className="form-label" for="form4Example2">
                  Image Link
                </label>
                <input
                  type="file"
                  id="form4Example2"
                  className="form-control"
                  name="image"
                  onChange={handleImage}
                />
              </div>

              <div className="form-outline mb-4">
                <label className="form-label" for="form4Example3">
                  Description
                </label>
                <textarea
                  className="form-control"
                  id="form4Example3"
                  rows="4"
                  name="description"
                  onChange={handleChange}
                  value={product.description}
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary btn-block mb-4">
                {_product ? "Update" : "Add"}{" "}
              </button>
            </form>
          </div>
          <div className="col-3"></div>
        </div>
      </div>
    </>
  );
};

export default ProductForm;
