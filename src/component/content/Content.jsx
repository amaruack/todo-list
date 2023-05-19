import React, {useContext, useEffect, useReducer, useState} from 'react';
import {Todo} from "./Todo";
import todoReducer from "./reducer/todoReducer";
import {HeaderContext, useHeader} from "../../context/HeaderContext";

import styles from './Todo.module.css';
import {TodoAdd} from "./TodoAdd";
import {v4 as uuidv4} from "uuid";

export const Content = () => {

    const {header} = useHeader();
    const [todoList, dispatch] = useReducer(todoReducer, [], () => readTodoList());

    const handleAdd = (replacedItem) => {
        dispatch({type:'added', todoId: uuidv4(), todoItem:replacedItem});
    }

    return (
        <section className={`${styles.todoContainer}`}>
            <ul className={styles.todoList}>
                {
                    todoList.filter((todo) =>  {
                            if (header.filter === 'all') {
                                return true;
                            } else {
                                return todo.status === header.filter;
                            }
                        })
                        .map((todo) => {
                        return <Todo key={todo.todoId} todo={todo} todoDispatch={dispatch}/>
                    })
                }
            </ul>
            <TodoAdd onAdd={handleAdd}/>
        </section>
    );
};

const readTodoList = () => {
    let initData = localStorage.getItem('todoList');
    initData = initData === null ? [] : JSON.parse(initData);
    return initData;
}