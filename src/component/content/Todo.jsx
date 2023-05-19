import React from 'react';
import styles from './Todo.module.css';
import {FaTrashAlt} from "react-icons/fa";

export const Todo = (props) => {

    // todoDispatch
    const handleChange = (e) => {
        // const todoId = e.target.parentElement.dataset.id;
        const todoId = props.todo.todoId;
        const status = e.target.checked ? 'completed' : 'active';
        props.todoDispatch({type:'updated', todoId, status })
    }

    const handleDelete = (e) => {
        // const todoId = e.target.parentElement.dataset.id;
        const todoId = props.todo.todoId;
        props.todoDispatch({type:'deleted', todoId:todoId})
    }

    return (
        <li className={styles.todo} >
            <input className={styles.checkbox} type={'checkbox'} checked={props.todo.status === 'completed' ? true:false} onChange={handleChange}/>
            <label className={styles.text}>{props.todo.todoItem}</label>
            <span className={styles.icon}><button className={styles.delete} onClick={handleDelete}><FaTrashAlt/></button></span>
        </li>
    );
};