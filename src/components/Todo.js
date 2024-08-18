import React,{useState} from 'react';
import './Todo.css';
import list from './image/list.png'



function Todo() {

        const [inputText, setInputText] = useState([]);
        const [newText,setNewText] = useState('');

        const addTask=()=> {
          if(newText.trim()!== ''){
            setInputText([...inputText,newText])
            setNewText('')
          }
          else{
            alert('you must write something!')
            
          }
          
          
        };
        const removeTask = (index)=>{
          const updatedTask = inputText.filter((_,i)=> i !== index);
          setInputText(updatedTask)
        }



  return (

    <div className="container">
      <div className="todo-app">
        <h1>To-do List <img src={list}/></h1>
        <div className="row">
          <input 
          type="text"
           id="input-box"
            value={newText} 
            onChange={(e)=> setNewText(e.target.value)} 
             placeholder='Enter your task' />
          <button onClick={addTask}>Add</button>
        </div>
        <ul id='list-container'>
          {inputText.map((task ,index)=>(
            <li className='checked' key={index}>
              {task} 
              <button onClick={()=>removeTask(index)}>Remove</button>
         
              </li>

          ))}
         
        </ul>
      </div>
    </div>


  )
}

export default Todo



