import './product.css';

function Product({id , name , image , onAddToCart }) {
    return(
        <div key = {id} className="product">
            <img src={require(`../../assets/${image}`)} alt={name}></img>
            <div className="product-name">{name}</div>
            <button className="yellow-button" onClick={() =>onAddToCart(id , name , image)}>Add to Cart</button>
        </div>
    );
    
}

function Products({products , onAddToCart}) {
    return(
        <div className="products-container">
            {products.map((product) => (
                <Product key = {product.id}
                id = {product.id}
                name =  {product.name}
                image={product.image}
                onAddToCart = {onAddToCart}
                />
            ))
            }
        </div>
    );
    
}
export default Products;