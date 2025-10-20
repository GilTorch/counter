import { useState, } from 'react';
import { v4 as uuidv4 } from 'uuid';

function TodoItem({ children }){

    return <li>{children}</li>
}

export default function TodoListWithInput(){

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
                {todos.map((item, index) => <TodoItem key={index}><input />{item.label} <button onClick={() => handleRemove(index)}>remove</button></TodoItem>)}
            </ul>
        </div> 
    )
}