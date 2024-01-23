import { useContext } from "react";
import { ItemsContext } from "../context/ItemsContext";
import { SearchContext } from "../context/SearchContext";

function ResultsCount() {
  const elements = useContext(ItemsContext);
  const {search} = useContext(SearchContext)
  return (
    <p>
      Se encontraron {elements.filter((elem) => !!elem).length} elementos para la busqueda '{search}'
    </p>
  );
}

export default ResultsCount;
