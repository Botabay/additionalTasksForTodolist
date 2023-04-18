import React, {ChangeEvent, KeyboardEvent, useState} from 'react';
import {FilterValuesType} from './App';
import s from "./Todolist.module.css";
import {SuperCheckBox } from './SuperCheckBox/SuperCheckBox'

type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    changeFilter: (value: FilterValuesType) => void
    addTask: (title: string) => void
    checkBoxStatus:(taskId:string,checkValue:boolean)=>void
}

export function Todolist(props: PropsType) {

    let [title, setTitle] = useState("");
    const [error,setError] =useState<string|null>(null);

    let [filter, setFilter] = useState<FilterValuesType>("all");
    
    const addTask = () => {
        if(title.trim()){
            props.addTask(title.trim());
            setTitle("");
        } else {
            setError('this field is required')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError(null)
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => {props.changeFilter("all");setFilter('all')}
    const onActiveClickHandler = () => {props.changeFilter("active");setFilter('active')}
    const onCompletedClickHandler = () => {props.changeFilter("completed");setFilter('completed')}

    const ff=(e:boolean,id:string)=>{
        props.checkBoxStatus(id,e)
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input 
                className={error?s.error:''}
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
        </div>
        {error && <div className={s.errorMessage}>
            {error}
        </div>}
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)
                    // const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
                    //     // props.checkBoxStatus(t.id, e.currentTarget.checked)
                    //     ff(t.id)                    // }


                    return <li key={t.id} className={t.isDone?s.isDone:''}>
                        {/* <input type="checkbox" checked={t.isDone} onChange={onChangeHandler}/> */}
                        <SuperCheckBox callBack={(e)=>ff(e,t.id)} isDone={t.isDone}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>
            <button className={filter==='all'? s.activeFilter: ''} onClick={onAllClickHandler}>All</button>
            <button className={filter==="active" ? s.activeFilter: ''} onClick={onActiveClickHandler}>Active</button>
            <button className={filter==='completed'? s.activeFilter: ''} onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}
