import './TodoListItem.css';
import { useState } from "react";

interface ToDoListItemProps {
    text?: string;
    id?: string;
}

const ToDoListItem = ({text, id}: ToDoListItemProps) => {
    // const [item, setItem]: any = useState("");

  return (
    <ul className='ToDoListItem'>
        <li>
            {text}
        </li>
        <input 
            className='ToDoListItemCheckbox'   
            type="checkbox" 
            onChange={()=> console.log('Checkbox checked!')}
        />
    </ul>
    
  )
}

export default ToDoListItem