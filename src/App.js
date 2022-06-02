import "./components/GlobalComponents/reset.css";
import './App.css';
import { useState , useEffect } from 'react';
import api from './data/api';
import Header from './components/Header';
import { GlobalStyle } from "./components/GlobalComponents/style";
import ProductsList from "./components/ProductsList";
import Cart from "./components/Cart";

function App() {

  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentSale, setCurrentSale] = useState([]);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {

    api
      .get("products")
      .then((res) => {
        setProducts(res.data);
        setFilteredProducts(res.data)
      })
      .catch((err) => {
        console.log(err);
      })
  }, []);

  useEffect(() => {
    const total = currentSale.reduce((a, b) => a + b.quantity*b.price, 0)
    setCartTotal(total)
  }, [currentSale]);

  function handleClick(productId) {
    const currentItem = currentSale.find((item) => item.id === productId)
    const newCartItem = products.find((item) => item.id === productId)
    if(currentItem) {
      newCartItem.quantity++
      setCurrentSale([...currentSale])
    } else {
      newCartItem.quantity = 1
      setCurrentSale([...currentSale, newCartItem])
    }   
  }

  return (
    <div className="App">
      <GlobalStyle />
      <Header products={products} setFilteredProducts={setFilteredProducts}/>
      <main>
        <ProductsList handleClick={handleClick} products={filteredProducts}/>
        <Cart setCurrentSale={setCurrentSale} cartTotal={cartTotal} currentSale={currentSale}/>
      </main>
    </div>
  );
}

export default App;
