import React, { useState } from "react";
import { Login } from './Components/Login';
import Header from './Components/Header';
import Main from "./Components/Main";
import Basket from "./Components/Basket";
import data from "./data";
function App() {
  const [switchPage, setSwitchPage] = useState(false);
  const { products } = data;
  const [cartItems, setCartItems] = useState([]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
  if (exist) {
    setCartItems(cartItems.map((x) =>
      x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
    )
    );
  } else {
    setCartItems([...cartItems, { ...product, qty: 1 }]);
  }
};
const onRemove = (product) => {
  const exist = cartItems.find((x) => x.id === product.id);
  if (exist.qty === 1) {
    setCartItems(cartItems.filter((x) => x.id !== product.id));
  } else {
    setCartItems(cartItems.map((x) => x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
    )
    );
  }
};

  return (
  <>
      <div className="App">
         <Login switchPage = {switchPage}/>
    <Header countCartItems={cartItems.length}></Header>
    <div className="row">
      <Main products={products} onAdd={onAdd}></Main>
      <Basket cartItems={cartItems}
        onAdd={onAdd}
        onRemove={onRemove}
      ></Basket>
    </div>
      </div>
      <button onClick={() => setSwitchPage((prev) => !prev)}>{switchPage ? "Signup" : "Login"}</button>
  </>
  );
}

export default App;
