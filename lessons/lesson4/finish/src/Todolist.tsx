import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import { FilterValuesType } from './App';
import s from './Todolist.module.css'
import { Checkbox } from './components/Checkbox';

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
    checkBoxStatus: (checkValue: boolean, id: string) => void
}

export function Todolist(props: PropsType) {

    const [title, setTitle] = useState<string>("")
    const [error, setError] = useState<string>("")
    const [filter,setFilter]= useState<string>('all')
    const addTask = () => {
        if (title.trim() !== '') {
            props.addTask(title.trim());
            setTitle("");
        } else {
            setError('wrong')
        }
    }

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setError('')
        setTitle(e.currentTarget.value)
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.charCode === 13) {
            addTask();
        }
    }

    const onAllClickHandler = () => {props.changeFilter("all"); setFilter('all')};
    const onActiveClickHandler = () => {props.changeFilter("active");setFilter('active')}
    const onCompletedClickHandler = () => {props.changeFilter("completed");setFilter('completed')}

    const onHandler=(k:boolean,id:string)=>{
        props.checkBoxStatus(k, id)
    }
  
    return <div>
        <h3>{props.title}</h3>
        <div>
            {error && <div className={s.errorMessage}>{error}</div>}
            <input
                className={error && s.error}
                value={title}
                onChange={onChangeHandler}
                onKeyPress={onKeyPressHandler}
            />
            <button onClick={addTask}>+</button>
        </div>
        <ul>
            {
                props.tasks.map(t => {

                    const onClickHandler = () => props.removeTask(t.id)
                    // const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
                    //     props.checkBoxStatus(e.currentTarget.checked, t.id)
                    // }


                    return <li key={t.id} className={t.isDone ? s.isDone : ''}>
                        {/* <input type="checkbox" checked={t.isDone} onChange={onChangeHandler}/> */}
                        <Checkbox isDone={t.isDone} callback={(k)=>onHandler(k,t.id)}/>
                        <span>{t.title}</span>
                        <button onClick={onClickHandler}>x</button>
                    </li>
                })
            }
        </ul>
        <div>            
            <button className={filter==='all'?s.activeFilter:''} onClick={onAllClickHandler}>All</button>
            <button className={filter==='active'?s.activeFilter:''} onClick={onActiveClickHandler}>Active</button>
            <button className={filter==='completed'?s.activeFilter:''} onClick={onCompletedClickHandler}>Completed</button>
        </div>
    </div>
}
