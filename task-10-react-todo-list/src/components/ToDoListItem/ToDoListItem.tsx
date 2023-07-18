import { ITodoListItem } from "../../types/index";
import './TodoListItem.css';

interface ToDoListItemProps {
    todos: ITodoListItem[];
    setTodos: any;
}

const ToDoListItem = ({todos, setTodos}: ToDoListItemProps) => {
   
  return (
    <ul >
        {todos.map((todo, index) => (
            <div className='ToDoListItem'>
                <li>
                    {todo.input}
                </li>
                <input 
                    className='ToDoListItemCheckbox'   
                    type="checkbox" 
                    onClick={()=> console.log('Checkbox checked!')}
                />
            </div>
        ))}
    </ul>
    
  )
}

export default ToDoListItem