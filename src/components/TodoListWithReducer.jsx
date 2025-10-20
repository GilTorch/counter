import { useState, useReducer } from 'react';

const todoReducer = (state, action) => {

    switch(action.type) {
        case "ADD_TODO": 
            return [...state,action.payload]
        case "REMOVE_TODO": 
            return [ ...state.slice(0,action.payload),...state.slice(action.payload + 1)];
        default: 
            return state
    }
}

export default function TodoList(){

    const [inputValue, setInputValue] = useState("");
    const [todos, dispatch] = useReducer(todoReducer,[])

    const handleChange = (e) => {
        setInputValue(e.target.value);
    }

    const handleClick = () => {
        dispatch({ type: "ADD_TODO", payload: inputValue});
    }

    const handleRemove = (pos) => {
        dispatch({ type: "REMOVE_TODO", payload: pos })
    }

    return (
        <div>
            <h1>Todo list</h1>
            <input type="text" onChange={handleChange} value={inputValue}/>
            <button type="submit" onClick={handleClick}>Add todo</button>
            <ul>
                {todos.map((item, index) => <li key={index}>{item} <button onClick={() => handleRemove(index)}>remove todo</button></li>)}
            </ul>
        </div> 
    )
}