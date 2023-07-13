import Button from '../ReusableComponents/Button/Button';
import './ToDoForm.css';
import { useState } from "react";

const ToDoForm = () => {
    const [input, setInput]: any = useState("");
    console.log(input);
    const [todoList, setTodoList]: any = useState([]);
    // const [item, setItem]: any = useState("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value) 
    };

  return (
    <div className='ToDoForm'>
        <h1>My To Do List</h1>
        <input 
            className='ToDoFormInput' 
            type="text" 
            value= {input}
            onChange={handleInputChange}
        />
        <Button
            setItem={setInput}
            text="ADD"
            buttonColor= '#817F77'
        />
    </div>
  )
}

export default ToDoForm