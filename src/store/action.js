import axios from "axios";

export const FETCH_PRODUCT = "FETCH_PRODUCT";
export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await axios.get("http://localhost:8000/products");
      dispatch({
        type: FETCH_PRODUCT,
        payload: { product: response.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const deleteProduct = (productID) => {
  return async (dispatch) => {
    try {
      await axios.delete(`http://localhost:8000/products/${productID}`);
      dispatch({
        type: DELETE_PRODUCT,
        payload: { productID: productID },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createProduct = (newProduct) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newProduct) formData.append(key, newProduct[key]);
      const res = await axios.post("http://localhost:8000/products/", formData);
      dispatch({
        type: CREATE_PRODUCT,
        payload: { newProduct: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const updateProduct = (updatedProduct) => {
  console.log("to be update", updatedProduct);
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in updatedProduct)
        formData.append(key, updatedProduct[key]);
      const res = await axios.put(
        `http://localhost:8000/products/${updatedProduct.id}`,
        formData
      );
      dispatch({
        type: UPDATE_PRODUCT,
        payload: { updatedProduct: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
