import React from 'react';
import './Header.css';

export const Header = () => {
    return (
        <div className={'header'}>
            <div className={'mode'}>mode</div>
            <div className={'filter'}>
                <span className={'filter-item'}>All</span>
                <span className={'filter-item'}>Active</span>
                <span className={'filter-item'}>Completed</span>
            </div>
        </div>
    );
};