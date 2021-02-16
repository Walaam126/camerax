import products from "../products";
const initialState = {
  products: [],
  loading: true,
};
export const reducer = (state = initialState, action) => {
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
      const _newProduct = action.payload.newProduct;
      const slug = _newProduct.name.toLowerCase().replaceAll(" ", "-");
      //   const id = state.products.length + 1;
      action.payload.newProduct = {
        slug: slug,
        ...action.payload.newProduct,
      };
      console.log({
        ...state,
        products: [...state.products, action.payload.newProduct],
      });
      return {
        ...state,
        products: [...state.products, action.payload.newProduct],
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

export default reducer;
