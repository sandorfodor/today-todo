import './App.css';
import TodoList from './components/TodoList';
import AppDescription from './components/AppDescription';

const App = () => {
  return (
    <div className="App">
      <AppDescription />
      <TodoList />
    </div>
  );
}

export default App;
