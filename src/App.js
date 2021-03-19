import './App.css';
import TodoList from './components/TodoList';
import AppDescription from './components/AppDescription';
import TodoContextProvider from './contexts/TodoContext';
import TodoForm from './components/TodoForm';

const App = () => {
  return (
    <div>
      <main class="px-3">
        <div className="App">
          <TodoContextProvider>
            <AppDescription />
            <TodoList />
            <TodoForm />
          </TodoContextProvider>
        </div>
      </main>
      <footer class="mt-auto text-white-50">
        <p>This is a free app, feel free to fork and extend!</p>
      </footer>
    </div>
  );
}

export default App;
