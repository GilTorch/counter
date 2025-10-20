import logo from './logo.svg';
import './App.css';
import Counter from './components/Counter';
import Form from './components/Form';
import Button from './components/Button';
import TodoList from './components/TodoList';
import TodoListWithInput from './components/TodoListWithInput';
import Parent from './components/Parent';

function App() {
  return (
    <>
    {/* <Counter />
    <Form /> */}
    {/* <TodoList /> */}
    {/* <TodoListWithInput /> */}
    {/* <Button onClick={() => window.alert("HELP!")}>
        Help!
    </Button> */}
    <Parent />
    </>
  );
}

export default App;
