import axios from "axios";
import { createContext, useState, useEffect } from "react";

const CategoriasContext = createContext();

export const CategoriasProvider = ({children}) => {

  const [categorias, setCategorias] = useState([])

  useEffect(() => {
    obtenerCategorias();
    async function obtenerCategorias() {
      const url = 'https://www.thecocktaildb.com/api/json/v1/1/list.php?c=list';
      const { data } = await axios(url);

      setCategorias(data.drinks);

    }

  }, []);

  return(
    <CategoriasContext.Provider
      value={{
        categorias,
      }}
    >
      {children}
    </CategoriasContext.Provider>
  )
}

export default CategoriasContext;