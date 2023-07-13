import './Button.css';
import React, { SetStateAction } from "react";

interface ButtonProps {
    text?: string;
    buttonColor?: '#817F77' | '#FFCD2B';
    setItem: React.Dispatch<SetStateAction<string>>;
}

const Button = ({text, buttonColor, setItem}: ButtonProps) => {
  return (
    <button 
        className='SharedButton'
        style={buttonColor ? {backgroundColor: buttonColor} : {backgroundColor: '#817F77' }}
        onClick={()=> console.log('Button clicked!')}
        
    
    > {text} </button>
  )
}

export default Button