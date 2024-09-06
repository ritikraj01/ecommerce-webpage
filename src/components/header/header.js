
import "./header.css";


function Header({openCart , openAddProduct}) {
    

   return(
        <div className="header">
            <h1 id="headerName">My Store</h1>
            <div>
                <button className="yellow-button" onClick={openAddProduct}style={{marginRight : "20px"}}>Add Product</button>                 
               <button className="yellow-button" onClick={openCart}>Cart</button>
            </div>
            
        </div>
   );
}

export default Header;