import React, { useContext } from 'react';
import { TodoContext } from '../contexts/TodoContext';

const TodoList = () => {
    const { todos, removeTodo } = useContext(TodoContext);

    return todos.length ? (
        <div id="todo-list">
            <ul className="list-group">
                { todos.map(todo => {
                    return (<li className="list-group-item list-group-item-action" onClick={() => removeTodo(todo.name)}>{ todo.name }</li>);
                }) }
            </ul>
        </div>
    ) : (
        <div>Nothing to do.</div>
    );
}

export default TodoList;