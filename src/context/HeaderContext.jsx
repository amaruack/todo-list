import React, {createContext, useContext, useEffect, useState} from 'react';

export const HeaderContext = createContext();

export function HeaderProvider({children}) {

    const [header, setHeader] = useState(() => {return initMode()});
    const toggleDarkMode = () => {
        console.log("toggleDarkMode start");
        setHeader(prevState => ({mode:!prevState.mode, filter: prevState.filter}));
        updateDarkMode(!header.mode);
        console.log("toggleDarkMode end");
    }
    const selectFilter = (filter) => {
        setHeader(prevState => ({mode:prevState.mode, filter: filter}));
    }

    return (
        <HeaderContext.Provider value={{header, toggleDarkMode, selectFilter}}>{children}</HeaderContext.Provider>
    )
}

const initMode = () => {
    const mode = localStorage.mode === null ? false:localStorage.mode ;
    console.log("mode = "+mode);
    updateDarkMode(mode);
    return {mode:mode, filter:'all'}
}

function updateDarkMode(darkMode) {
    console.log("update mode "+darkMode);
    if (JSON.parse(darkMode)) {
        document.documentElement.classList.add('dark');
        localStorage.mode=true;
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.mode=false;
    }
}

export const useHeader = () => useContext(HeaderContext);