import React, {createContext, useState} from 'react';

export const HeaderContext = createContext();

export function HeaderProvider({children}) {

    const [header, setHeader] = useState({mode:false, filter:'all'});
    const toggleDarkMode = () => {
        setHeader(prevState => ({mode:!prevState.mode, filter: prevState.filter}));
    }
    const selectFilter = (filter) => {
        setHeader(prevState => ({mode:prevState.mode, filter: filter}));
    }
    return (
        <HeaderContext.Provider value={{header, toggleDarkMode, selectFilter}}>{children}</HeaderContext.Provider>
    )
}