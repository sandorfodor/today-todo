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
            <div class="input-group mb-3">
                <input onChange={(e) => setName(e.target.value)} type="text" class="form-control" placeholder="Name of the todo" aria-label="Name of the todo" />
                <input type="submit" class="btn btn-outline-secondary" value="Add todo" />
            </div>
        </form>
    );
};

export default TodoForm;