import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoList = () => {
    const { todos, removeTodo } = useContext(TodoContext);

    return todos.length ? (
        <div>
            <ul>
                { todos.map(todo => {
                    return (<li className="todo-item" onClick={() => removeTodo(todo.name)}>{ todo.name }</li>);
                }) }
            </ul>
        </div>
    ) : (
        <div>Nothing to do.</div>
    );
}

export default TodoList;