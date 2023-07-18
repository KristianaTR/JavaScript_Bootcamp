import Button from '../ReusableComponents/Button/Button';
import './ToDoForm.css';
import { useState } from "react";

const ToDoForm = () => {
    const [input, setInput]: any = useState("");
    console.log(input);
    const [todoList, setTodoList]: any = useState([]);
    const [todoText, settodoText]: any = useState('');
    // const [item, setItem]: any = useState("");

    

  return (
    <div className='ToDoForm'>
        <h1>My To Do List</h1>
        <input 
            className='ToDoFormInput' 
            type="text" 
            value= {input}
            onChange={(event)=> settodoText(event.target.value)}
        />
        <Button
            text="ADD"
            buttonColor= '#817F77'
            
        />
    </div>
  )
}

export default ToDoForm