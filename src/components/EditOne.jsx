import { React, useState, useEffect } from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import { editOne, showOne} from '../services/todo-api'



function EditOneItem() {
    const [data, setData] = useState([])
    let navigate = useNavigate()
    const {id} = useParams()

    useEffect(()=>{
        showOne(id)
        .then((res) => setData(res.data))
    },[id])

const editItem = (event)=> {
        let edited = {description: event.target.description.value, complete: event.target.complete.checked}
        editOne(id, edited)
        navigate(`/${id}`)
    }

  return (
    <div>
        <h1>Edit {data.description} </h1>
        <form onSubmit={editItem}>
            Description: <input type='text' name='description' defaultValue={data.description}></input>
            Complete: <input type='checkbox' name='complete' defaultValue={data.complete}></input>
         <input type='submit' value='Edit Item'/>
        </form>
    </div>
  )
}

export default EditOneItem