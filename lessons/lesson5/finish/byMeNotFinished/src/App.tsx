import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import {v1} from "uuid";


//CRUD
//C-create
//R-read (filter, search, sort)
//U-update
//D-delete
type TodolistType={
    id:string
    title:string
    filter:FilterValuesType
}
type TaskStateType={
    [todoListId:string]:TaskType[]
}
export type FilterValuesType = "all" | "active" | "completed"

function App() {
    const todoListId_1=v1();
    const todoListId_2=v1();
    const [todolistsSt, setTodoListSt]=useState<TodolistType[]>([
        {id:todoListId_1,title:'what to learn',filter:'all'},
        {id:todoListId_2,title:'what to read',filter:'all'}
    ])

    const [tasksSt, setTasksSt]=useState<TaskStateType>({
        [todoListId_1]:[
            {id:v1(),title:'css',isDone:false},
            {id:v1(),title:'html',isDone:false},
            {id:v1(),title:'js',isDone:false},
        ],
        [todoListId_2]:[
            {id:v1(),title:'milk',isDone:false},
            {id:v1(),title:'bread',isDone:false},
            {id:v1(),title:'meat',isDone:false},
        ],
    })
    
    // const todoListTitle: string = "What to learn"
    // const [tasks, setTasks] = useState<Array<TaskType>>([
    //     {id: v1(), title: "HTML&CSS", isDone: false},
    //     {id: v1(), title: "JS/ES6&TS", isDone: true},
    //     {id: v1(), title: "REACT/REDUX", isDone: false},
    // ])
    const removeTask = (taskId: string, todoListId:string) => {
        // const updatedTasks = tasks.filter(t => t.id !== taskId)
        // setTasks(updatedTasks)
        const updatedTasks = tasksSt[todoListId].filter(t => t.id !== taskId)
        setTasksSt({...tasksSt,[todoListId]:updatedTasks})
    }
    const addTask = (title: string, todoListId:string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        // setTasks([newTask, ...tasks])
        const updatedTasks = [...tasksSt[todoListId],newTask]
        setTasksSt({...tasksSt,[todoListId]:updatedTasks})
    }
    const changeTaskStatus = (taskId: string, newIsDoneValue: boolean, todoListId:string) => {
        //setTasks(tasks.map(t => t.id === taskId ? {...t, isDone: newIsDoneValue} : t))
        const updatedTasks = tasksSt[todoListId].filter(t => t.id !== taskId)
        setTasksSt(tasksSt[todoListId].map(t => t.id === taskId ? {...t, isDone: newIsDoneValue} : t))//????
    }



    // const[filter, setFilter] = useState<FilterValuesType>("all")
    // const changeFilter = (nextFilter: FilterValuesType) => {
    //     setFilter(nextFilter)
    // }
    
    const changeTodolistFilter = (nextFilter: FilterValuesType) => {
        setFilter(nextFilter)
    }

    const removeTodolist=(todoListId:string){
        setTodoListSt(todolistsSt.filter(el=>el.id!==todoListId))
    }

    const getTasksForMe = (tasksList: Array<TaskType>, filterValue: FilterValuesType) => {
        switch (filterValue) {
            case "active":
                return tasks.filter(t => !t.isDone)
            case "completed":
                return tasks.filter(t => t.isDone)
            default:
                return tasks
        }
    }

    const tasksWhatIWantToSee = getTasksForMe(tasks, filter)

    return (
        <div className="App">
            <TodoList
                filter={filter}
                title={todoListTitle}
                tasks={tasksWhatIWantToSee}

                addTask={addTask}
                removeTask={removeTask}
                changeFilter={changeFilter}
                changeTaskStatus={changeTaskStatus}
            />
        </div>
    );
}

export default App;
