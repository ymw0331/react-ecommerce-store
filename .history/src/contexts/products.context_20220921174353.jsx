import { createContext } from "react";

import PRODUCTS from "../shop-data.json";


export const ProductContext = createContext({})

export const ProductsProvider = ({children}) =>{
    return(
        <ProductContext.Provider>

            
        </ProductContext.Provider>
    )
}