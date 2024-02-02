import {useState, useEffect} from "react"
import axios from "axios"


export default function App(){

  let [count, setCount] = useState(1)

  return<>
    <h2>Hi</h2>
    <button onClick={() => setCount(1)}>Id 1</button>
    <button onClick={() => setCount(2)}>Id 2</button>
    <button onClick={() => setCount(3)}>Id 3</button>
    <button onClick={() => setCount(4)}>Id 4</button>

    <Todo id={count}/>

  </>
}

function Todo({id}){

  let [todo, setTodo] = useState({})

  useEffect( () => {
    axios.get(`https://sum-server.100xdevs.com/todo?id=${id}`)
    .then((res) => {
      setTodo(res.data.todo)
    }) 
  }, [id])

  return <>
    <h1>{todo.title}</h1>
    <h2>{todo.description}</h2>
  </>
}