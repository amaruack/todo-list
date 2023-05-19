import React, {createContext, useContext, useEffect, useState} from 'react';

export const HeaderContext = createContext();

export function HeaderProvider({children}) {

    const [header, setHeader] = useState({mode:false, filter:'all'});
    const toggleDarkMode = () => {
        setHeader(prevState => ({mode:!prevState.mode, filter: prevState.filter}));
        updateDarkMode(header.mode);
    }
    const selectFilter = (filter) => {
        setHeader(prevState => ({mode:prevState.mode, filter: filter}));
    }

    useEffect(() => {
        const mode = localStorage.mode === null ? false:localStorage.mode ;
        setHeader(prevState => ({mode:mode, filter:prevState.filter}));
    }, []);

    return (
        <HeaderContext.Provider value={{header, toggleDarkMode, selectFilter}}>{children}</HeaderContext.Provider>
    )
}

function updateDarkMode(darkMode) {
    if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.mode=true;
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme=false;
    }
}

export const useHeader = () => useContext(HeaderContext);