import React, {useEffect, useRef, useState} from 'react';
import logo from './logo.svg';
import './App.css';
import {SuperButton} from "./components/SuperButton";
import {SuperInput} from "./components/SuperInput";

type TodosType = {
    userId: number
    id: number,
    title: string,
    completed: boolean
}

function App() {
    const [todos, setTodos] = useState<TodosType[]>([])

    //const td=[{},{},{}]

    const[title, setTitle]=useRef('')
    console.log(todos)

    const fetchRequest = () => {
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodos(json))
    }

    useEffect(() => {
        fetchRequest()
    }, [])

    const showTodosHandler = () => {
        fetchRequest()
    }

    const hideTodosHandler = () => {
        setTodos([])
    }

    const addTaskHandler = () => {
        let newTask={userId: 6666, id: todos.length+1, title: title, completed: false}
        setTodos([newTask,...todos])
        setTitle('')
        //setTodos([{},{},{}],{userId: 1, id: 1, title: title, completed: false})
// возьми title и отправь setTodos(title)
//         let [title,...setTodos]
    }

    return (
        <div className="App">
            <div>
                <SuperInput setTitle={setTitle} title={title} />
                <SuperButton callBack={addTaskHandler} name={'+'}/>
            </div>
            <div>
                <button onClick={showTodosHandler}>Show me Todos</button>
                <button onClick={hideTodosHandler}>Hide Todos</button>
            </div>


            <ul>
                {todos.map(el => {
                    return (
                        <li key={el.id}>
                            <span>{el.id}</span>
                            <span> _ {el.userId}</span>
                            <span> _ {el.title}</span>
                            <input type="checkbox" checked={el.completed}/>
                        </li>
                    )
                })}
            </ul>
        </div>
    );
}

export default App;
