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
            <div className="input-group mb-3">
                <input onChange={(e) => setName(e.target.value)} type="text" className="form-control" placeholder="Name of the todo" aria-label="Name of the todo" />
                <input type="submit" className="btn btn-outline-secondary" value="Add todo" />
            </div>
        </form>
    );
};

export default TodoForm;