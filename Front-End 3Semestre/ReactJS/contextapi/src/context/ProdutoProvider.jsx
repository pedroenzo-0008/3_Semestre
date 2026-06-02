import { useState } from "react";
import { ProdutoContext } from "./ProdutoContext";

export const ProdutoProvider = ({ children }) => {
    const [listarProduto, setListarProduto] = useState([]);

    return (
        <ProdutoContext.Provider
            value={{
                listarProduto,
                setListarProduto
            }}
        >
            {children}
        </ProdutoContext.Provider>
    );
};

export default ProdutoProvider;