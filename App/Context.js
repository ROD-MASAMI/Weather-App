import React, { useState, createContext} from 'react';

 export const SearchContext = createContext();

 export const SearchProvider = props =>{
     const [info, setInfo] = useState(false)
    
  return(
     <SearchContext.Provider value={[info, setInfo]}>
       {props.children}
     </SearchContext.Provider>
  );
 }


 