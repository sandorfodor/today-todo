import React, { useContext, useState } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoForm = () => {
    const { addTodo } = useContext(TodoContext);
    const [name, setName] = useState('');

    const handleSubmit = e => {
        e.preventDefault();
        addTodo(name);
    }

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Name of the todo" value={name} onChange={(e) => setName(e.target.value)}  required />
            <input type="submit" value="Add todo" />
        </form>
    );
};

export default TodoForm;