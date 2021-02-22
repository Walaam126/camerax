const initialState = {
  products: [],
  loading: true,
};
export const productReducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_PRODUCT":
      state.loading = false;
      return {
        ...state,
        products: action.payload.product,
      };
    case "DELETE_PRODUCT":
      const remainingProducts = state.products.filter(
        (product) => product.id !== action.payload.productID
      );
      return {
        ...state,
        products: remainingProducts,
      };
    case "CREATE_PRODUCT":
      const newProduct = action.payload.newProduct;
      return {
        ...state,
        products: [...state.products, newProduct],
      };
    case "UPDATE_PRODUCT":
      const UpdatedProducts = state.products.map((product) => {
        if (product.id === action.payload.updatedProduct.id)
          return action.payload.updatedProduct;
        else return product;
      });
      return {
        ...state,
        products: UpdatedProducts,
      };
    default:
      return state;
  }
};

export default productReducer;
