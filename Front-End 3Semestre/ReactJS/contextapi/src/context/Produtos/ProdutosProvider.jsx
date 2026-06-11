import { useState } from "react"
import { ProdutoContext } from "./ProdutoContext"

export const ProdutosProvider = ({children}) => {
    const [produtos, setProdutos] = useState([
    ])
    return (
        <ProdutoContext.Provider
         value={{ 
            produtos, 
            setProdutos }}
        >
            {children}
        </ProdutoContext.Provider>
    )
}