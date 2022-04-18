import './App.css'
import { BrowserRouter as Router, Routes, Route,} from 'react-router-dom'
import Todo from './components/TodoList'
import AddOne from './components/AddOne'
import EditOneItem from './components/EditOne'
import Show from './components/Show'

function App() {
  return (
    <Router>
      <Routes>
        <Route path= '/' element={<Todo/>}></Route>
        <Route path= '/:id' element={<Show/>}></Route>
        <Route path= '/addOne' element={<AddOne/>}></Route>
        <Route path= '/:id/editOne' element={<EditOneItem/>}></Route>
      </Routes>
    </Router>
  )
}

export default App
