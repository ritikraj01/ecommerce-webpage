import { useRef } from "react";
import Modal from "../modal/modal.js";
import "./addproduct.css"
import { useState } from "react";

function AddProduct({showAddProduct , closeAddProduct , onAddProduct}) {
    //const nameRef = useRef();
    const [productName,setProductName]=useState("");
    function handleSubmit(event) {
        event.preventDefault();
        //onAddProduct(nameRef.current.value);
        onAddProduct(productName);
    }
    const handleProductNameChange =(event)=>{
        const enteredName = event.target.value;
        console.log(enteredName);
        setProductName(enteredName);
    };


    return (<Modal show = {showAddProduct} onClose = {closeAddProduct}>
        <div className="add-product-container">
            <div className="add-product-heading">Add Product</div>
            <form onSubmit={handleSubmit} className="add-product-form">
                <div className="form-label">Enter Product Name</div>
                {/* <input ref ={nameRef} className="form-input" ></input> */}
                <input className="form-input" value ={productName} onChange={handleProductNameChange}></input>
                <button type="submit" className="yellow-button submit-button"> Add Product</button>
            </form>
        </div>
        </Modal>);
}
export default AddProduct;