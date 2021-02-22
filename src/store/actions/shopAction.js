import axios from "axios";
import instance from "./instance";

import * as types from "./types";

export const fetchShops = () => {
  return async (dispatch) => {
    try {
      const response = await instance.get("/shops");
      dispatch({
        type: types.FETCH_SHOP,
        payload: { shops: response.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};

export const createShop = (newShop) => {
  return async (dispatch) => {
    try {
      const formData = new FormData();
      for (const key in newShop) formData.append(key, newShop[key]);
      const res = await axios.post("http://localhost:8000/shops/", formData);
      dispatch({
        type: types.CREATE_SHOP,
        payload: { newShop: res.data },
      });
    } catch (error) {
      console.log(error);
    }
  };
};
