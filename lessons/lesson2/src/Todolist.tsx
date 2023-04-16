import React from 'react';
// import {filterType} from './App'

type TaskType = {
    id: number
    title: string
    isDone: boolean
}
type filterType= 'All'|'Active'|'Completed';

type PropsType = {
    title: string
    tasks: Array<TaskType>
    deleteItem:(id:number)=>void
    // filterItems:(isDone:filterType)=>void
}

export function Todolist(props: PropsType) {
    /*const onClickButtonHandler =(event:React.MouseEvent<HTMLButtonElement, MouseEvent>)=>{
        //event.currentTarget.closest('li')?.remove()//my first decision for deleting
        let e=event.currentTarget.closest('li');
        if (e) props.deleteItem(e);
        return;
    }*/
    const onClickLiButtonHandler =(id:number)=>{
        props.deleteItem(id)
    }
    const [key,setKey]=React.useState('All');
    const filterItems=(isDone:filterType)=>{
        setKey(isDone)
    }
    const onClickButtonHandler =(isDone:filterType)=>{
        filterItems(isDone)
    }
    
    const ff=()=>{
        let tempView=props.tasks;    
        if (key==='Completed') tempView=props.tasks.filter(el=>el.isDone);
        if (key==='Active') tempView=props.tasks.filter(el=>!el.isDone);
        return tempView;
    }
    return <div>
        <h3>{props.title}</h3>
        <div>
            <input/>
            <button>+</button>
        </div>
        <ul>
            {ff().map(el=>{
                return (
                    <li key={el.id}>
                        <button onClick={()=>onClickLiButtonHandler(el.id)}>X</button>
                        <input type="checkbox" checked={el.isDone} onChange={()=>{}}/>
                        <span>{el.title}</span>
                    </li>)
                })
            }
            {/* <li><input type="checkbox" checked={props.tasks[0].isDone}/> <span>{props.tasks[0].title}</span></li>
            <li><input type="checkbox" checked={props.tasks[1].isDone}/> <span>{props.tasks[1].title}</span></li>
            <li><input type="checkbox" checked={props.tasks[2].isDone}/> <span>{props.tasks[2].title}</span></li> */}
        </ul>
        <div>
            <button onClick={()=>onClickButtonHandler('All')}>All</button>
            <button onClick={()=>onClickButtonHandler('Active')}>Active</button>
            <button onClick={()=>onClickButtonHandler('Completed')}>Completed</button>
        </div>
    </div>
}
