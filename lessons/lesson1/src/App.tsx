import React from 'react';
import './App.css';
import { Todolist } from './components/Todolist';

export const App=()=> {
    const titleValue='asdfadfadfasdfkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkkk';
    const tasks1= [
        {taskId: 1, title: "HTML&CSS1", isDone: true},
        {taskId: 2, title: "JS1", isDone: true},
        {taskId: 3, title: "TS", isDone: false}
    ];
    const tasks2= [
        {taskId: 1, title: "HTML&CSS2", isDone: true},
        {taskId: 2, title: "JS2", isDone: true},
        {taskId: 3, title: "TS2", isDone: false},
        {taskId: 4, title: "PHP", isDone: true}
    ]
    return (
        <div className="App">
            <Todolist title={'What to learn'} body={'this is body'} tasks={tasks1}/>
            <Todolist title={'What to remember'} tasks={tasks2}/>
            {/* <Todolist title={titleValue}/> */}
        </div>
    );
}
