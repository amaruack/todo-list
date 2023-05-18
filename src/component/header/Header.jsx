import React, {useContext, useState} from 'react';
import styles from './Header.module.css';
import {HeaderContext} from "../../context/HeaderContext";

export const Header = () => {

    const {header, toggleDarkMode, selectFilter} = useContext(HeaderContext);
    // const [filter, setFilter] = useState('all');

    const handleActive = (e) => {
        selectFilter(e.target.dataset.type);
    }

    return (
        <div className={styles.header}>
            <div className={styles.mode}>
                <span onClick={() => toggleDarkMode()} >{header.mode ? (<span style={{backgroundColor:"black", color:"white"}} >Dark</span>) : (<span>Light</span>)}</span>
            </div>
            <div className={styles.filter}>
                <span className={`${styles.filterItem} ${header.filter === 'all' ? styles.active:''}`} data-type={'all'} onClick={handleActive}>All</span>
                <span className={`${styles.filterItem} ${header.filter === 'active' ? styles.active:''}`} data-type={'active'} onClick={handleActive}>Active</span>
                <span className={`${styles.filterItem} ${header.filter === 'completed' ? styles.active:''}`} data-type={'completed'} onClick={handleActive}>Completed</span>
            </div>
        </div>
    );
};