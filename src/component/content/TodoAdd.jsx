import React, {useState} from "react";

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
        <form onSubmit={handleAddClick}>
            <input id={'todo'} name={'todo'} type={'text'} value={todoItem} onChange={handleChange}/>
            <button>add</button>
        </form>
    )
}