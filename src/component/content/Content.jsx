import React, {useContext, useEffect, useReducer, useState} from 'react';
import {Todo} from "./Todo";
import todoReducer from "./reducer/todoReducer";
import {HeaderContext} from "../../context/HeaderContext";

import styles from './Todo.module.css';

export const Content = () => {

    let initData = localStorage.getItem('todoList');
    initData = initData === null ? [] : JSON.parse(initData);

    console.log(initData);
    const {header} = useContext(HeaderContext);
    const [todoList, dispatch] = useReducer(todoReducer, initData);
    const [todoItem, setTodoItem] = useState('');

    const handleAdd = (e) => {
        if (todoItem === '') {
            return
        }
        dispatch({type:'added', todoItem:todoItem});
        setTodoItem('');
    }

    const handleChange = (e) => {
        setTodoItem(e.target.value);
    }

    return (
        <div>
            <div className={styles.todoContainer}>
                {
                    todoList.filter((todo) =>  {
                            if (header.filter === 'all') {
                                return true;
                            } else {
                                return todo.status === header.filter;
                            }
                        })
                        .map((todo) => {
                        return <Todo key={todo.todoItem} todo={todo}  todoDispatch={dispatch}/>
                    })
                }
            </div>
            <div><input id={'todo'} name={'todo'} type={'text'} value={todoItem} onChange={handleChange}/><button onClick={handleAdd}>add</button></div>
        </div>
    );
};

const initialData = [
    // {
    //     todoItem:'todo1',
    //     status : 'active'
    // },
    // {
    //     todoItem:'todo2',
    //     status : 'active'
    // },
    // {
    //     todoItem:'todo3',
    //     status : 'completed'
    // }
]