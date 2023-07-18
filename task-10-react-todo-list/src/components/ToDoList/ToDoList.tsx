import './ToDoList.css';
import ToDoListItem from '../ToDoListItem/ToDoListItem';
import { ITodoListItem } from "../../types/index";
import { useState } from 'react';
import { useEffect } from 'react';

const ToDoList = () => {
    const [todos, setTodos]: any = useState<ITodoListItem[]>([]);
    console.log(todos);
    const [remainingItems, setRemainingItems] = useState(0);
    const [text, setText] = useState<ITodoListItem>({
      input: "",
      isChecked: false,
    });

    useEffect(()=> {
      const remainingItems = todos.filter((todo) => !todo.isChecked).lenght;
      setRemainingItems(remainingItems);
    })

  return (
    <div className='ToDoList'>
        <h2>You have {remainingItems} listed items:</h2>
        <ToDoListItem todos={todos} setTodos={setTodos}/>
    </div>
  )
}

export default ToDoList