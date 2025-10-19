import { useState } from "react"

export default function TodoItem({ children, onRemove }){

    const [isHighlighted, setIsHighlighted] = useState(false);

    const handleClick = () => {
        setIsHighlighted(prevState => !prevState);
    }

    return <li onClick={handleClick} style={{backgroundColor: isHighlighted ? 'red': "white"}}>{children} <button onClick={onRemove}>remove todo</button></li>
}