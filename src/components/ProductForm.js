import { useState } from "react";
import { createProduct } from '../store/action';
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
const ProductForm = () => {
    const history = useHistory();
   const dispatch = useDispatch ()
    const[product, setProduct] = useState({
        name: "",
        price: "",
        image: "",
        description:""
    })

    const handleChange = (event) =>
        setProduct({
            ...product,
            [event.target.name]: event.target.value
        });
    
    const resetForm = () => {
        setProduct({
            name: "",
            price: "",
            image: "",
            description:"" 
        })
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch(createProduct(product))
        resetForm();
        history.push("/products");
    }

    
    return (
        <>
        <div className="container"> 
        <div className="row">
          
        <div className="col-3"></div>
                    
    <div className="col-6">
    <h2>Add New Product</h2><br></br>
    <form  onSubmit={handleSubmit}>
    <div className="form-outline mb-4">
    <label className="form-label" for="form4Example1">Name</label>
    <input type="text" id="form4Example1" className="form-control" name="name" onChange={handleChange} value={product.name}/>
  </div>

  
    <div className="form-outline mb-4">
    <label className="form-label" for="form4Example2">Price</label>
    <input type="email" id="form4Example2" className="form-control" name="price" onChange={handleChange} value={product.price}/>
    </div>
    <div className="form-outline mb-4">
    <label className="form-label" for="form4Example2">Image Link</label>
    <input type="text" id="form4Example2" className="form-control" name="image" onChange={handleChange} value={product.image}/>
  </div>

  <div className="form-outline mb-4">
  <label className="form-label" for="form4Example3">Description</label>
  <textarea className="form-control" id="form4Example3" rows="4" name="description" onChange={handleChange} value={product.description}></textarea>
  </div>

  <button type="submit" className="btn btn-primary btn-block mb-4">Add</button>
</form>                
    </div>
    <div className="col-3"></div>
  </div>
</div>

  </>
  );
};

export default ProductForm;