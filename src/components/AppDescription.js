import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const AppDescription = () => {
    const { todos } = useContext(TodoContext)
    return(
        <div>
            <h1>Today, todo!</h1>
            <em>Hey Achiever, here you can set your daily goals! You already have { todos.length }!</em>
        </div>
    );
}

export default AppDescription;