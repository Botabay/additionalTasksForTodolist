import React, {useState} from 'react';
import './App.css';
import TodoList, {TaskType} from "./TodoList";
import {v1} from "uuid";


//CRUD
//C-create
//R-read (filter, search, sort)
//U-update
//D-delete

export type FilterValuesType = "all" | "active" | "completed"

function App() {

    const todoListTitle: string = "What to learn"
    const [tasks, setTasks] = useState<Array<TaskType>>([
        {id: v1(), title: "HTML&CSS", isDone: false},
        {id: v1(), title: "JS/ES6&TS", isDone: true},
        {id: v1(), title: "REACT/REDUX", isDone: false},
    ])
    const removeTask = (taskId: string) => {
        const updatedTasks = tasks.filter(t => t.id !== taskId)
        setTasks(updatedTasks)
    }
    const addTask = (title: string) => {
        const newTask: TaskType = {
            id: v1(),
            title: title,
            isDone: false
        }
        setTasks([newTask, ...tasks])
    }
    const changeTaskStatus = (taskId: string, newIsDoneValue: boolean) => {
        setTasks(tasks.map(t => t.id === taskId ? {...t, isDone: newIsDoneValue} : t))
    }



    const[filter, setFilter] = useState<FilterValuesType>("all")
    const changeFilter = (nextFilter: FilterValuesType) => {
        setFilter(nextFilter)
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
