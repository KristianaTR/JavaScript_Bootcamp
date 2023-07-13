import React from 'react';
import './index.css';
import ToDoList from './components/ToDoList/ToDoList';
import ToDoForm from './components/ToDoForm/ToDoForm';

function App() {
  return (
    <div className="App">
      <ToDoForm/>
      <ToDoList/>
    </div>
  );
}

export default App;
