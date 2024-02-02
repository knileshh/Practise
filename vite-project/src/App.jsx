import {useState, useEffect} from "react"
import axios from "axios"


export default function App(){

  return<>
    <h2>Hi</h2>
    <Todo id={2}/>
  </>
}

function Todo({id}){

  let [todo, setTodo] = useState({})

  useEffect( () => {
    axios.get("https://sum-server.100xdevs.com/todo?id="+ id)
    .then((res) => {
      setTodo(res.data.todo)
    }) 
  }, [])

  return <>
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
  </>
}