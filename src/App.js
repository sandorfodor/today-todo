import './App.css';
import TodoList from './components/TodoList';
import AppDescription from './components/AppDescription';

function App() {
  return (
    <div className="App">
      <AppDescription />
      <TodoList />
    </div>
  );
}

export default App;
