import { useEffect, useState } from "react";
import { ThemeButton } from "../GlobalComponents/style";
import "./index.css";
import { InputContainer , Tittle } from "./style.js"

function Header({products, setFilteredProducts}) {

  const [userInput, setUserInput] = useState("");

  useEffect(() => {
    setFilteredProducts(products.filter(({name, category}) => {
      return name.toLowerCase().includes(userInput.toLowerCase()) || category.toLowerCase().includes(userInput.toLowerCase());
    }))
  }, [userInput, products, setFilteredProducts]); 

  return (
    <header>
      <Tittle>Burguer<span> Kenzie</span></Tittle>
      <InputContainer>
        <input
        type="text"
        placeholder="Digitar Pesquisa"
        value={userInput}
        onChange={(event) => setUserInput(event.target.value)}
        />
        <ThemeButton>Pesquisar</ThemeButton>
      </InputContainer>
    </header>
  )
}

export default Header;