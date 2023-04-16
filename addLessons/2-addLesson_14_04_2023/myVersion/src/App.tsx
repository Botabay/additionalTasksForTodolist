import React, { useState, useEffect,useRef } from 'react';
import './App.css';
import { log } from 'console';
import { SuperButton } from './Components/SuperButton';
import { SuperInput } from './Components/SuperInput';

type DataType={
    id:number
    title:string|undefined
    completed:boolean
}
export const App = () => {
    let [todosSt, setTodosSt] = useState<DataType[]>([])
    const fetchRequest=()=>{
        fetch('https://jsonplaceholder.typicode.com/todos')
            .then(response => response.json())
            .then(json => setTodosSt(json))
    }
    useEffect(() => {
        fetchRequest()
    }, [])
    const showTodos=()=>{
        fetchRequest()
    }
    const hideTodos=()=>{
        setTodosSt([])
    }
    
    // let [inputSt,setInputSt]=useState('')//must use useRef('') for avoid a multi-requesting
    // console.log(todosSt)
    let inpRef=useRef<HTMLInputElement>(null)//must use useRef('') for avoid a multi-requesting

    const addTodo=()=>{        
        setTodosSt([{id:todosSt.length+1,title:inpRef.current.value,completed:true},...todosSt])
        inpRef.current.value='';
    }
    const onClickHandlerSuper=(value:string)=>{
        // inpRef.current=value;
    }
    return (
        <div className="App">
            <button onClick={showTodos}>show me Todos</button>
            <button onClick={hideTodos}>hide me Todos</button>
            <div>
                {/* <input type="text" value={inputSt} onChange={(e)=>{setInputSt(e.currentTarget.value)}}/>
                <button onClick={addTodo}>+</button> */}
                {/* <SuperInput value={inputSt} callback={setInputSt}/> */}
                <SuperInput inpRef={inpRef}/>
                <SuperButton name={'add todo'}  callback={addTodo}/>
            </div>
            <ul>
                {todosSt.map((el, ind) => {
                    return (
                        <li key={ind}>
                            <span>{el.id}</span>
                            <span>{el.title}</span>
                            <span>{el.completed}</span>
                        </li>
                    )
                }
                )}
            </ul>

        </div>
    );
}