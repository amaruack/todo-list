import React, {useState} from "react";
import styles from './TodoAdd.module.css';


export const TodoAdd = (props) => {

    const [todoItem, setTodoItem] = useState('');

    const handleChange = (e) => {
        setTodoItem(e.target.value);
    }

    const handleAddClick = (e) => {
        e.preventDefault();
        const replacedItem = todoItem.trim();
        if (replacedItem === '') {
            return
        }
        props.onAdd(replacedItem);
        setTodoItem('');
    }

    return (
        <form className={styles.form} onSubmit={handleAddClick}>
            <input placeholder={'Todo ADD'} className={styles.input} id={'todo'} name={'todo'} type={'text'} value={todoItem} onChange={handleChange}/>
            <button className={styles.button}>add</button>
        </form>
    )
}