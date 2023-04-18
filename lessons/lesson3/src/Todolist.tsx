import React, { useState } from 'react';
// import {FilterValuesType} from './App';
import {Button} from './Components/Button/Button' 
type FilterValuesType = "all" | "active" | "completed" | "three";
type TaskType = {
    id: string
    title: string
    isDone: boolean
}

type PropsType = {
    title: string
    tasks: Array<TaskType>
    removeTask: (taskId: string) => void
    // changeFilter: (value: FilterValuesType) => void
    removeAllTasks: () => void
    addTask: (e:string) => void
}

export function Todolist(props: PropsType) {
    let [filter, setFilter] = useState<FilterValuesType>("all");

    const arrayWrapper = () => {
        let tasksForTodolist = props.tasks;

        if (filter === "active") {
            tasksForTodolist = props.tasks.filter(t => t.isDone === false);
        }
        if (filter === "completed") {
            tasksForTodolist = props.tasks.filter(t => t.isDone === true);
        }
        if (filter === "three") {
            tasksForTodolist = props.tasks.filter((t, ind) => ind < 3)
        }
        return tasksForTodolist
    }
    function changeFilter(value: FilterValuesType) {
        setFilter(value);
    }

    const onClickHandler=()=>{props.addTask(inpState);
        setInpState('')}
    const onChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{setInpState(e.currentTarget.value)}
    // const onKeyPressHandler=(e:React.KeyboardEvent<HTMLInputElement>)=>{
    //     if(e.key==='Enter') {
    //         props.addTask(inpState);
    //         setInpState('');
    //     }
    //     return;
    // }
    const onKeyDownHandler=(e:React.KeyboardEvent<HTMLInputElement>)=>{
        if(e.key==='Enter') {
            props.addTask(inpState);
            setInpState('');
        }
        return;
    }
    let [inpState,setInpState]=useState<string>('');

    const onClickFilterButtonHandler=(s:FilterValuesType)=>{
        changeFilter(s);
    }

    return <div>
        <h3>{props.title}</h3>
        <div>
            <input 
                value={inpState}
                onChange={onChangeHandler} 
                onKeyDown={onKeyDownHandler}
            />
            <button onClick={onClickHandler}>+</button>
        </div>
        <ul>
            {
                arrayWrapper().map(t => {
                    const onClickLiHandler=(e:string) => {
                        props.removeTask(e)
                    };
                    return (
                        <li key={t.id}>
                            <input type="checkbox" checked={t.isDone} onChange={() => { }} />
                            <span>{t.title}</span>
                        {/* <button onClick={()=>{onClickLiHandler(t.id)}}>x</button> */}
                            <Button callback={()=>{onClickLiHandler(t.id)} } value={'x'}/>
                        </li>
                    )

                }
                )
            }
        </ul>
        <div>
            <button onClick={props.removeAllTasks}>
                DELETE ALL TASKS
            </button>
        </div>
        <div>
        <Button callback={()=>{onClickFilterButtonHandler('all')} } value={'All'}/>
        <Button callback={()=>{onClickFilterButtonHandler('active')} } value={'Active'}/>
        <Button callback={()=>{onClickFilterButtonHandler('completed')} } value={'Completed'}/>
        <Button callback={()=>{onClickFilterButtonHandler('three')} } value={'show the first three tasks'}/>
            {/* <button onClick={() => { onClickFilterButtonHandler("all") }}>
                All
            </button>
            <button onClick={() => { onClickFilterButtonHandler("active") }}>
                Active
            </button>
            <button onClick={() => { onClickFilterButtonHandler("completed") }}>
                Completed
            </button>
            <button onClick={() => { onClickFilterButtonHandler("three") }}>
                show the first three tasks
            </button> */}
        </div>
    </div>
}

























//------------------------------------------------------------------------------------------------

// import React, {useState} from 'react';
// import {FilterValuesType} from './App';
//
// type TaskType = {
//     id: number
//     title: string
//     isDone: boolean
// }
//
// type PropsType = {
//     title: string
//     tasks: Array<TaskType>
//     removeTask: (taskId: number) => void
//     //changeFilter: (value: FilterValuesType) => void
//     deleteAllTasks:()=>void
// }
//
// export function Todolist(props: PropsType) {
//
//     let [filter, setFilter] = useState<FilterValuesType>("all");
//
//     let tasksForTodolist = props.tasks;
//
//     if (filter === "three") {
//         tasksForTodolist = props.tasks.filter(t => t.id<4);
//     }
//     if (filter === "active") {
//         tasksForTodolist = props.tasks.filter(t => t.isDone === false);
//     }
//     if (filter === "completed") {
//         tasksForTodolist = props.tasks.filter(t => t.isDone === true);
//     }
//
//     function changeFilter(value: FilterValuesType) {
//         setFilter(value);
//     }
//
//     return <div>
//         <h3>{props.title}</h3>
//         <div>
//             <input/>
//             <button>+</button>
//         </div>
//         <ul>
//             {
//                 tasksForTodolist.map(t => <li key={t.id}>
//                     <input type="checkbox" checked={t.isDone}/>
//                     <span>{t.title}</span>
//                     <button onClick={ () => { props.removeTask(t.id) } }>x</button>
//                 </li>)
//             }
//         </ul>
//         <button onClick={()=>props.deleteAllTasks()}>DELETE ALL TASKS</button>
//         <div>
//             <button onClick={ () => { changeFilter("three") } }>
//                 Give me the first three
//             </button>
//             <button onClick={ () => { changeFilter("all") } }>
//                 All
//             </button>
//             <button onClick={ () => { changeFilter("active") } }>
//                 Active
//             </button>
//             <button onClick={ () => { changeFilter("completed") } }>
//                 Completed
//             </button>
//         </div>
//     </div>
// }