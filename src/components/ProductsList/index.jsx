import Product from "../Product";
import "./index.css"

function ProductsList({products, handleClick}) {
  return (
    <ul className="productsList">
      {products?.map((item) => (  
          <Product key={item.id} handleClick={handleClick} product={item}/>
      ))}
    </ul>
  )
}

export default ProductsList;