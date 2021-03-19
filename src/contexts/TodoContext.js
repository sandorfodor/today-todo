import React, { createContext, useState } from 'react';

export const TodoContext = createContext();

const TodoContextProvider = props => {
    const localStorageKey = 'todos';
    const storedTodos = JSON.parse(localStorage.getItem(localStorageKey)) || [];
    const [todos, setTodos] = useState(storedTodos);

    const addTodo = name => {
        const actualTodoList = [...todos, { name }];
        setTodos(actualTodoList)
        storeTodos(actualTodoList);
    }

    const removeTodo = name => {
        const actualTodoList = todos.filter(todo => todo.name !== name);
        setTodos(actualTodoList);
        storeTodos(actualTodoList);
    }

    const storeTodos = actualTodoList => {
        localStorage.setItem(localStorageKey, JSON.stringify(actualTodoList));
    }

    return (
        <TodoContext.Provider value={{ todos, addTodo, removeTodo }}>
            { props.children }
        </TodoContext.Provider>
    );
}

export default TodoContextProvider;