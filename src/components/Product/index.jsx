import { ThemeButton } from "../GlobalComponents/style";
import { ListItem } from "./style";

function Product({product, handleClick}) {
  return (
    <ListItem>
      <div>
        <img alt="" src={product.img}></img>
      </div>
      
      <h3>{product.name}</h3>
      <p className="category">{product.category}</p>
      <p className="price">{product.price.toFixed(2)}</p>
      <ThemeButton onClick={() => handleClick(product.id)}>Adicionar</ThemeButton>
    </ListItem>
  )
}

export default Product;