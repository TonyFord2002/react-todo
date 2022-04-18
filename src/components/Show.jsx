import {React, useState, useEffect} from 'react'
import {useNavigate, useParams} from 'react-router-dom'
import {showOne} from '../services/todo-api'
import {deleteOne} from '../services/todo-api'

function Show() {
  const navigate = useNavigate()
  const {id} = useParams()
  const [item, setItem] = useState([])
  
    useEffect(()=>{
        showOne(id)
        .then((res) => setItem(res.data))
    },[id])
    
    const deleteOneItem = ()=>{
      deleteOne(id)
      navigate('/')

}
      
  return (
      <>
    <div><h2>Thing to do:</h2></div><br/>
    <h3>{item.description}</h3> 
    Completed:<input type='checkbox' defaultChecked={item.complete} disabled/>
    <br/>
    <button style={{borderRadius:'7px' }} onClick={deleteOneItem}> Delete this to do </button><br/>
    <button style={{borderRadius:'7px' }} onClick={()=> {navigate(`/${id}/editOne`)}}> Edit this to do </button><br/>
    <button style={{borderRadius:'7px' }} onClick={()=> {navigate('/')}}> Back to list </button>
    </>
  )
}

export default Show