import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const AppDescription = () => {
    const { todos } = useContext(TodoContext)
    return(
        <div>Hey Achiever, here you can set your daily goals! You already have { todos.length }!</div>
    );
}

export default AppDescription;