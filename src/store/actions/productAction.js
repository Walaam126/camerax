import axios from "axios";
import instance from "./instance";
import * as types from "./types";
import { useDispatch } from "react-redux";
import { addProduct } from "./shopAction";
export const fetchProducts = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/products");
      dispatch({
        type: types.FETCH_PRODUCT,
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
      await instance.delete(`/products/${productID}`);
      dispatch({
        type: types.DELETE_PRODUCT,
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
      const res = await instance.post(
        `/shops/${newProduct.shopId}/products`,
        formData
      );
      // call update shop

      dispatch({
        type: types.CREATE_PRODUCT,
        payload: { newProduct: res.data },
      });
    } catch (error) {
      console.log("create error is", error);
    }
  };
};

export const updateProduct = (updatedProduct) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in updatedProduct)
        formData.append(key, updatedProduct[key]);
      const res = await instance.put(
        `/products/${updatedProduct.id}`,
        formData
      );
      dispatch({
        type: types.UPDATE_PRODUCT,
        payload: { updatedProduct: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
