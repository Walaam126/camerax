export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";

export const deleteProduct = (productID) => {
    return {
        type: DELETE_PRODUCT,
        payload: { productID: productID }
        
    };
}

export const createProduct = (newProduct) => {
    return {
        type: CREATE_PRODUCT,
        payload:{newProduct}
    }
}