const initialState = {
  shops: [],
};
export const shopReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_SHOP":
      return {
        ...state,
        shops: action.payload.shops,
      };
    case "CREATE_SHOP":
      const _newShop = action.payload.newShop;
      action.payload.newShop = {
        ...action.payload.newShop,
      };
      return {
        ...state,
        shops: [...state.shops, action.payload.newShop],
      };
    case "CREATE_PRODUCT":
      const newProduct = action.payload.newProduct;
      state.shops.forEach((shop) => {
        if (shop.id === newProduct.shopId)
          shop.products.push({ id: newProduct.id });
      });
      return state;
    default:
      return state;
  }
};

export default shopReducer;
