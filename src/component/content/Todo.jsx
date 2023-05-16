import React from 'react';

export const Todo = (props) => {

    return (
        <div key={props.item}>
            <input type={'checkbox'}/> <span>{props.item}</span>
        </div>
    );
};