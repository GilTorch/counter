import { useState, } from 'react';
import TodoItem from './TodoItem';
import { v4 as uuidv4 } from 'uuid';

export default function TodoList(){

    const [inputValue, setInputValue] = useState("");
    const [todos, setTodos] = useState([]);

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleClick = () => {
        setTodos(prev => [...prev, { id: uuidv4(), label: inputValue}]);
    }

    const handleRemove = (pos) => {
        setTodos([...todos.slice(0, pos), ...todos.splice(pos + 1)])
    }

    return (
        <div>
            <h1>Todo list</h1>
            <input type="text" onChange={handleChange} value={inputValue}/>
            <button type="submit" onClick={handleClick}>Add todo</button>
            <ul>
                {todos.map((item, index) => <TodoItem key={index} onRemove={() => handleRemove(index)}>{item.label}</TodoItem>)}
            </ul>
        </div> 
    )
}