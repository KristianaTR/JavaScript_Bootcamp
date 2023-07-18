import './Button.css';
import { useState } from 'react';
import { ITodoListItem } from "../../../types/index";

const ToDoList = () => {
  const [todos, setTodos] = useState<ITodoListItem[]>([]);
  const [text, setText] = useState<ITodoListItem>({
    input: "",
    isChecked: false,
  })
  interface ButtonProps {
      text?: string;
      buttonColor?: '#817F77' | '#FFCD2B';
  }
  
  const Button = ({text, buttonColor}: ButtonProps) => {
    const handleOnClick = () => {
      setTodos([...todos, text]); 
    };
}

  return (
    <button 
        className='SharedButton'
        style={buttonColor ? {backgroundColor: buttonColor} : {backgroundColor: '#817F77' }}
        onClick={handleOnClick}
        
    
    > {text} </button>
  )
}

export default Button