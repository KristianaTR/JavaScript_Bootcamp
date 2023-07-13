import './ToDoList.css';
import ToDoListItem from '../ToDoListItem/ToDoListItem';
import { useState } from 'react';

const ToDoList = () => {
    const [item, setItem]: any = useState("");
    console.log(item);
    // const [state, setState]: any = useState(0);
    // console.log(state);

  return (
    <div className='ToDoList'>
        <h2>You have {item} listed items:</h2>
        <ToDoListItem 
            text='This is manualy entered text'
            id= '1'
        />
    </div>
  )
}

export default ToDoList