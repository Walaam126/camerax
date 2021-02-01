import products from '../products'
const initialState = {
    products: products
}

export const reducer = (state=initialState, action) => {
    switch (action.type) {
        case "DELETE_PRODUCT":
            const remainingProducts = state.products.filter((product) => product.id !== action.payload.productID);
            return {
                ...state, products: remainingProducts,
            };
        default:
            return state
    }
}

export default reducer;