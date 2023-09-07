import './App.css';
import Header from './components/Header/Header';
import TodoItem from './components/ToDoItem/ToDoItem';

function App() {
  return (
    <div className="App">
      <div className="wrapper">
        <Header />
        <TodoItem />
        <TodoItem />
      </div>
    </div>
  );
}

export default App;
