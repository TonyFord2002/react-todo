import React from 'react'
import {useState, useEffect} from 'react'
import {getToDos} from '../services/todo-api'
import './toDoList.css'

function Todo() {
    const [List, setList] = useState([])

    useEffect(()=>{
        getToDos()
        .then((res) => setList(res.data))
    },[])
console.log(List)
  return (
    <div style={{color:'blue', fontFamily:"sans-serif"}}><h1 >To Do List</h1>
    <h3><a href= {`/addOne`}>Add a new item</a></h3>
    <ul style={{listStyleType:'repeating-emoji'}}>
    {List.map((item, i)=>{
      return(
        
        item.complete ?
          <li key={i}>
          <strike><h2><a href = {`/${item._id}`}>{item.description}</a></h2></strike>
        </li>

       : <li key={i}>
          <h2 ><a style={{backgroundColor:'lightgray'}} href = {`/${item._id}`}>{item.description}</a></h2>
        </li>
      )
    })}
    </ul>
    </div>
    )
}

export default Todo

//U+1F4CC