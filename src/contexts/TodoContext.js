import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = props => {
    const [todos, setTodos] = useState([
        { name: '10 minutes of yoga' }
    ]);

    const addTodo = name => {
        setTodos([...todos, { name }])
    }

    const removeTodo = name => {
        setTodos(todos.filter(todo => todo.name !== name));
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
            { props.children }
        </TodoContext.Provider>
    );
}

export default TodoContextProvider;