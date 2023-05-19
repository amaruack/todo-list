import React, {useContext, useState} from 'react';
import styles from './Header.module.css';
import {HeaderContext, useHeader} from "../../context/HeaderContext";
import {HiMoon, HiSun} from "react-icons/hi";

const Filters = ['all', 'active', 'completed'];

export const Header = () => {

    const {header, toggleDarkMode, selectFilter} = useHeader();

    const handleActive = (e) => {
        selectFilter(e.target.dataset.type);
    }

    return (
        <header className={styles.header}>
            <button onClick={() => toggleDarkMode()} className={styles.mode}>
                {header.mode ? <HiMoon/> : <HiSun/>}
            </button>
            <ul className={styles.filters}>
                {
                    Filters.map((value, index) =>
                        <button className={`${styles.filterItem} ${header.filter === value && styles.active}`} data-type={value} onClick={handleActive}>{value}</button>
                    )
                }
            </ul>
        </header>
    );
};