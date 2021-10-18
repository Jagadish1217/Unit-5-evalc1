import React from "react";
//import styles from "./Components/App.css";
export default function Product(props) {
    const { product, onAdd } = props;
    return (
        <div classname="small">
            <img className="small" src={product.image} alt={product.name} />
            <h3>{product.name}</h3>
            <div>₹{product.price}</div>
            <div>
                <button onClick={() => onAdd(product)}>Add to Cart</button>
            </div>
        </div>
    );
}