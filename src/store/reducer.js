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
        case "CREATE_PRODUCT":
            const _newProduct = action.payload.newProduct;
            const slug =  _newProduct.name.toLowerCase().replaceAll(' ', '-');
            const id = state.products.length + 1 ;
            action.payload.newProduct = { id: id, slug: slug, ...action.payload.newProduct};
            console.log(action.payload.newProduct);

            return {
                ...state, products: [...state.products, action.payload.newProduct],
            };
        default:
            return state
    }
}

export default reducer;