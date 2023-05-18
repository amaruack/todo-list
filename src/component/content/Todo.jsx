import React from 'react';
import styles from './Todo.module.css';
import {BiTrash} from "react-icons/bi";

export const Todo = (props) => {

    // todoDispatch
    const handleChange = (e) => {
        const todoItem = e.target.parentElement.dataset.id;
        props.todoDispatch({type:'updated', todoItem:todoItem, status: e.target.checked ? 'completed' : 'active'})
    }

    const handleDelete = (e) => {
        const todoItem = e.target.parentElement.dataset.id;
        props.todoDispatch({type:'deleted', todoItem:todoItem})
    }

    return (
        <div className={styles.todo} data-id={props.todo.todoItem}>
            <input type={'checkbox'} checked={props.todo.status === 'completed' ? true:false} onChange={handleChange}/>
            <span>{props.todo.todoItem}</span>
            <button className={styles.delete} onClick={handleDelete}>delete</button>
        </div>
    );
};