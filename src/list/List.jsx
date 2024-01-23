import { ItemsProvider } from "../context/ItemsContext";
import { SearchProvider } from "../context/SearchContext";
import ListView from "./ListView";

//Prop drilling
//Componentes de presentacion y componentes contenedores
//los componentes contenedores son los q manejan la informacion, los q acceeden directamente a los datos
function List() {
  return (
    <SearchProvider>
      <ItemsProvider>
        <ListView />
      </ItemsProvider>
    </SearchProvider>
  );
}

export default List;
