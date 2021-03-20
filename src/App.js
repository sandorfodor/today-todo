import './App.css';
import TodoList from './components/TodoList';
import AppDescription from './components/AppDescription';
import TodoContextProvider from './contexts/TodoContext';
import TodoForm from './components/TodoForm';
import Footer from './components/Footer';

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
      <Footer />
    </div>
  );
}

export default App;
