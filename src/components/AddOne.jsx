import React from 'react'
import {useNavigate} from 'react-router-dom'
import { createOne } from '../services/todo-api'


function AddOne() {
    let navigate = useNavigate()
    
const addNewItem = (event)=> {
        event.preventDfault()
        let text = {description: event.target.description.value, complete: false}
        createOne(text)
        navigate('/')
    }

  return (
    <div>
        <h1>Add new To Do</h1>
        <form onSubmit={addNewItem}>
            Description: <input type='text' name='description'></input>
         <input type='submit' value='Add Item'/>
        </form>
    </div>
  )
}

export default AddOne