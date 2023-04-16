type PropsType = {
    title: string
    body?: string
    tasks: Array<TaskType>
}
type TaskType = {
    taskId: number
    title: string
    isDone: boolean
}
export const Todolist = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                {props.tasks.map((el)=>{
                    return (
                        <li key={el.taskId}><input type="checkbox" checked={el.isDone} /> <span>{el.title}</span></li>
                    )
                })}
                
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}

/**
 * export const Todolist = (props: PropsType) => {
    return (
        <div>
            <h3>{props.title}</h3>
            <p>{props.body}</p>
            <div>
                <input />
                <button>+</button>
            </div>
            <ul>
                <li><input type="checkbox" checked={props.tasks[0].isDone} /> <span>{props.tasks[0].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[1].isDone} /> <span>{props.tasks[1].title}</span></li>
                <li><input type="checkbox" checked={props.tasks[2].isDone} /> <span>{props.tasks[2].title}</span></li>
            </ul>
            <div>
                <button>All</button>
                <button>Active</button>
                <button>Completed</button>
            </div>
        </div>
    )
}
 */