import './App.css';
import TodoList from './components/TodoList';
import AppDescription from './components/AppDescription';
import TodoContextProvider from './contexts/TodoContext';
import TodoForm from './components/TodoForm';

const App = () => {
  return (
    <div className="App">
      <TodoContextProvider>
        <AppDescription />
        <TodoList />
        <TodoForm />
      </TodoContextProvider>
    </div>
  );
}

export default App;
