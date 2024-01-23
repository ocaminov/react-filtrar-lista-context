import { createContext, useContext, useEffect, useState } from "react";
import frameworksList from "../list/items";
import { SearchContext } from "./SearchContext";

export const ItemsContext = createContext([])

export function ItemsProvider({children}){

  const [items, setItems] = useState(frameworksList);
  let { search } = useContext(SearchContext);

  useEffect(
    function () {
      if (!search || search === "") {
        setItems(frameworksList);
        return;
      }
      filterItems(search);
    },
    [search]
  );

  function filterItems(searchPattern) {
    let newItems = filterItemsBySearchPattern(searchPattern);
    setItems(newItems);
  }

  function filterItemsBySearchPattern(searchPattern) {
    let filterItems = frameworksList.map((item) =>
      item.toLowerCase().includes(searchPattern.toLowerCase()) ? item : null
    );
    return filterItems;
  }

  return(
    <ItemsContext.Provider value={items}>
      {children}
    </ItemsContext.Provider>
  )
}