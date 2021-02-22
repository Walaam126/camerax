import { combineReducers } from "redux";
import productReducer from "./productReducer";
import shopReducer from "./shopReducer";
import authReducer from "./authReducer";

const rootReducer = combineReducers({
  productReducer: productReducer,
  shopReducer: shopReducer,
  authReducer: authReducer,
});

export default rootReducer;
