import React, {useState} from 'react';
import {Todo} from "./Todo";

export const Content = () => {

    console.log("load");

    const [list, setList] = useState(['todo1', 'todo2', 'todo3']);
    const [todo, setTodo] = useState('');

    const handleAdd = (e) => {

    }

    const handleChange = (e) => {
        setTodo(e.target.value);
    }

    return (
        <div>
            {
                list.map((item) => {
                    return <Todo item={item}/>
                })
            }
            <div><input id={'todo'} name={'todo'} type={'text'} value={todo} onChange={handleChange}/><button onClick={handleAdd}>add</button></div>
        </div>
    );
};