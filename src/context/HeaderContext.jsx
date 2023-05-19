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
        //TODO localStorage

    }, []);

    return (
        <HeaderContext.Provider value={{header, toggleDarkMode, selectFilter}}>{children}</HeaderContext.Provider>
    )
}

function updateDarkMode(darkMode) {
    if (darkMode) {
        document.documentElement.classList.add('dark');
        localStorage.theme='dark';
    } else {
        document.documentElement.classList.remove('dark');
        localStorage.theme='light';
    }



}

export const useHeader = () => useContext(HeaderContext);