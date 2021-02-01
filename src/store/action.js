export const DELETE_PRODUCT = "DELETE_PRODUCT"

export const deleteProduct = (productID) => {
    console.log("deleted product action")
    return {
        type: DELETE_PRODUCT,
        payload: { productID: productID }
        
    };
}