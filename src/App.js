import './App.css';
import { useState } from 'react';
import Cart from './components/cart/cart.js'
import Header from './components/header/header.js';
import Products from './components/product/product.js';
import AddProduct from './components/addproduct/addproduct.js';
import intialProducts from "./data/products.json";

function App() {
  const [showCart , setShowCart]=useState(false);
  const [showAddProduct , setShowAddProduct]=useState(false);
  const [cartItems , setCartItems]=useState([]);
  const [products ,setProducts] = useState(intialProducts);
    const openCart = () =>setShowCart(true); 
    const closeCart = () =>setShowCart(false); 
    const openAddProduct = () =>setShowAddProduct(true); 
    const closeAddProduct = () =>setShowAddProduct(false); 

  function handleIncreaseQuantity(productId){
    console.log(productId);
    const productInCartIndex = cartItems.findIndex(
      (item) => item.id===productId
    );
    const updateCartItems = [...cartItems];
      updateCartItems[productInCartIndex].quantity += 1;
      setCartItems(updateCartItems);
  };
  function handleDecreaseQuantity(productId){
    const productInCartIndex = cartItems.findIndex(
      (item) => item.id===productId
    );
    const qty = cartItems[productInCartIndex].quantity;
    let updateCartItems = [...cartItems];

    if (qty>1) {
      
      updateCartItems[productInCartIndex].quantity -= 1;
     
    }
    else{
      updateCartItems = updateCartItems.filter(
        (item ,index) => item.id !== productId
      );
    }


    setCartItems(updateCartItems);
  };

  function handleAddToCart(pid, pname , pimage){
    // let updateCartItems = cartItems;
    // updateCartItems = updateCartItems.concat({
    //   id : pid,
    //   name : pname,
    //   image : pimage,
    //   quantity :1  
    // });
    // setCartItems(updateCartItems);

    const productInCartIndex = cartItems.findIndex(
      (item) => item.id===pid
    );
    if (productInCartIndex ===-1) {
      setCartItems((state) =>[
        ...state,
        {
          id : pid,
          name : pname,
          image : pimage,
          quantity :1 
        }
      ]);
    }
   else{
      const updateCartItems = [...cartItems];
      updateCartItems[productInCartIndex].quantity += 1;
      setCartItems(updateCartItems);
   }

  };

  const handleAddToProduct = (productName)=>{
    console.log(productName);
    const product={
      id:products.length +1,
      name: productName,
      image:"default_product.png",
    }
    setProducts((state)=>[...state,product]);
   closeAddProduct(); 
  };
  // React.Fragement , <></> 
  return (
    <>
      <Header openCart = {openCart} openAddProduct = {openAddProduct}/>
      <Products  products = {products} onAddToCart = {handleAddToCart}/>
      <Cart 
      showCart = {showCart} 
      closeCart = {closeCart} 
      cartItems = {cartItems}
      onIncQuantity = {handleIncreaseQuantity}
      onDecQuantity = {handleDecreaseQuantity}/>
      <AddProduct 
      showAddProduct = {showAddProduct} 
      closeAddProduct = {closeAddProduct}
      onAddProduct = {handleAddToProduct} />

    </>
  );
}
export default App;
