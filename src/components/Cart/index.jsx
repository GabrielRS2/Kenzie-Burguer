import { useState } from "react";
import { CartContainer, CartInfo, CartItem, CartList, CartTittle, EmptyCart, Line } from "./style";

function Cart({currentSale, cartTotal, setCurrentSale}) {

  function removeItem(productId) {
    const newList = currentSale.filter((elem) => elem.id !== productId)
    setCurrentSale(newList)
  }

  return (
    <CartContainer>
      <CartTittle>
        <p>Carrinho de compras</p>
      </CartTittle>
      {currentSale.length === 0 ? (
        <EmptyCart>
          <p className="empty">Sua sacola está vazia</p>
          <p className="add_itens">Adicione itens</p>
        </EmptyCart>
      ) : (
        <CartList>
          {currentSale.map((item) => (
          <CartItem key={1000 + item.id}>
            <div className="img_container">
              <img alt="" src={item.img}></img>
            </div>
            <div className="text_container">
              <div className="info_container">
                <p className="item_name">{item.name.length <= 14 ? item.name : item.name.slice(0, 14)+"..."}</p>
                <p className="item_category">{item.category}</p>
              </div>
              <div className="info_container">
                <button onClick={() => removeItem(item.id)}>remover</button>
                <p className="quantity">quantidade: {item.quantity}</p>
              </div>
            </div>
          </CartItem>
          ))}
        </CartList>
      )}
      {currentSale.length !== 0 && 
      <>
          <Line></Line>
          <CartInfo>
            <div className="price_container">
              <p className="total">Total</p>
              <p className="price">R$ {cartTotal.toFixed(2).toString().replaceAll(".", ",")}</p>
            </div>
            <button onClick={() => setCurrentSale([])}>Remover todos</button>
          </CartInfo>   
      </>
      }
    </CartContainer>
  )
}

export default Cart;