import React from 'react';
import './App.css';
import {Todolist} from './Todolist';

// export type filterType= 'All'|'Active'|'Completed';

export const App=()=> {
    const tasks1 = [
        { id: 1, title: "HTML&CSS", isDone: true },
        { id: 2, title: "JS", isDone: true },
        { id: 3, title: "ReactJS", isDone: false }
    ]
    const [tasks,setTasks]=React.useState(tasks1)
    // const tasks2 = [
    //     { id: 1, title: "Hello world", isDone: true },
    //     { id: 2, title: "I am Happy", isDone: false },
    //     { id: 3, title: "Yo", isDone: false }
    // ]
    const deleteItem=(id:number)=>{
        // tasks1=tasks.filter(el=>el.id!=id);
        const t=tasks.filter(el=>el.id!=id);
        console.log(tasks,t);        
        setTasks([...t])        
    }

    // let bKey='All';
    // const filterItems=(isDone:filterType)=>{
    //     bKey=isDone;
    // }    
    // if (bKey==='Completed') tempView=tasks.filter(el=>!el.isDone);
    // if (bKey==='Active') tempView=tasks.filter(el=>el.isDone);

    // let tempView=tasks;
    // const [key,setKey]=React.useState('All');
    // const filterItems=(isDone:filterType)=>{
    //     setKey(isDone)
    // }
    // if (key==='Completed') tempView=tasks.filter(el=>el.isDone);
    // if (key==='Active') tempView=tasks.filter(el=>!el.isDone);

    return (
        <div className="App">
            <Todolist 
                title="What to learn"
                tasks={tasks}
                deleteItem={deleteItem}
                /*filterItems={filterItems}*/
            />
            {/* <Todolist title="Songs" tasks={tasks2} /> */}
        </div>
    );
}
