import "./Button.css";
import React, { SetStateAction } from "react";


interface ButtonProps {
    icon?: string;
    text: string;
    buttonColor?: "green" | "red" | "gray" | "blue";
    buttonText?: "red" | "blue" | "green";
    setItem: React.Dispatch<SetStateAction<string>>;
    id: string;
}

const Button = ({icon, text, buttonColor, buttonText, setItem, id}: ButtonProps) => {
    const buttonStyle = {
        backgroundColor: buttonColor,
        color: buttonText,
      };
    
    const buttonStyleState = () => {
        if (buttonColor && buttonText) {
            return buttonStyle;
          }
          if (buttonColor) {
            return { backgroundColor: buttonColor };
          }
          if (buttonText) {
            return { color: buttonText };
          }
    };

    return (
        <button 
            onClick={()=> setItem(id)}
            style={ buttonStyleState() } 
            className="SharedButton"
        >
            {text}
            { icon && <img className="ButtonIcon" src={icon} alt="" /> }
        </button>
    )
}

export default Button;