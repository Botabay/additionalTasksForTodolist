import { TasksStateType } from '../App';
// import { v1 } from 'uuid';
import { AddTodolistActionType, RemoveTodolistActionType, SetTodolistsActionType } from './todolists-reducer';
import { TaskPriorities, TaskStatuses, TaskType, todolistsAPI } from '../api/todolists-api'
import { Dispatch } from 'redux';
import { AppRootStateType } from './store';

export type RemoveTaskActionType = {
    type: 'REMOVE-TASK',
    todolistId: string
    taskId: string
}

export type AddTaskActionType = {
    type: 'ADD-TASK',
    item: TaskType
}

export type ChangeTaskStatusActionType = {
    type: 'CHANGE-TASK-STATUS',
    todolistId: string
    taskId: string
    status: TaskStatuses
}

export type ChangeTaskTitleActionType = {
    type: 'CHANGE-TASK-TITLE',
    todolistId: string
    taskId: string
    title: string
}
export type SetTasksActionType = {
    type: 'SET_TASKS'
    todolistId: string
    items: TaskType[]
}
type ActionsType = RemoveTaskActionType | AddTaskActionType
    // | ChangeTaskStatusActionType
    // | ChangeTaskTitleActionType
    | ReturnType<typeof changeTaskFieldAC>
    | AddTodolistActionType
    | RemoveTodolistActionType
    | SetTodolistsActionType
    | SetTasksActionType

const initialState: TasksStateType = {
    /*"todolistId1": [
        { id: "1", title: "CSS", status: TaskStatuses.New, todoListId: "todolistId1", description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low },
        { id: "2", title: "JS", status: TaskStatuses.Completed, todoListId: "todolistId1", description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low },
        { id: "3", title: "React", status: TaskStatuses.New, todoListId: "todolistId1", description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low }
    ],
    "todolistId2": [
        { id: "1", title: "bread", status: TaskStatuses.New, todoListId: "todolistId2", description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low },
        { id: "2", title: "milk", status: TaskStatuses.Completed, todoListId: "todolistId2", description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low },
        { id: "3", title: "tea", status: TaskStatuses.New, todoListId: "todolistId2", description: '',
            startDate: '', deadline: '', addedDate: '', order: 0, priority: TaskPriorities.Low }
    ]*/

}

export const tasksReducer = (state: TasksStateType = initialState, action: ActionsType): TasksStateType => {
    switch (action.type) {
        case 'SET_TODOLISTS': {
            const stateCopy = { ...state }
            action.items.forEach((tl) => {
                stateCopy[tl.id] = []
            })
            return stateCopy;
        }
        case 'SET_TASKS': {
            return { ...state, [action.todolistId]: action.items };
        }
        case 'REMOVE-TASK': {
            const stateCopy = { ...state }
            const tasks = stateCopy[action.todolistId];
            const newTasks = tasks.filter(t => t.id !== action.taskId);
            stateCopy[action.todolistId] = newTasks;
            return stateCopy;
        }
        case 'ADD-TASK': {

            return { ...state, [action.item.todoListId]: [action.item, ...state[action.item.todoListId]] }
        }
        // case 'CHANGE-TASK-STATUS': {
        //     let todolistTasks = state[action.todolistId];
        //     let newTasksArray = todolistTasks
        //         .map(t => t.id === action.taskId ? { ...t, status: action.status } : t);

        //     state[action.todolistId] = newTasksArray;
        //     return ({ ...state });
        // }
        // case 'CHANGE-TASK-TITLE': {
        //     let todolistTasks = state[action.todolistId];
        //     // найдём нужную таску:
        //     let newTasksArray = todolistTasks
        //         .map(t => t.id === action.taskId ? { ...t, title: action.title } : t);

        //     state[action.todolistId] = newTasksArray;
        //     return ({ ...state });
        // }
        case 'CHANGE-TASK-FIELD': {
            let todolistTasks = state[action.todolistId];
            let newTasksArray = todolistTasks
                .map(t => t.id === action.taskId ? { ...t, [action.fieldName]: action.fieldValue } : t);

            state[action.todolistId] = newTasksArray;
            return ({ ...state });
        }
        case 'ADD-TODOLIST': {
            return {
                ...state,
                [action.todolistId]: []
            }
        }
        case 'REMOVE-TODOLIST': {
            const copyState = { ...state };
            delete copyState[action.id];
            return copyState;
        }
        default:
            return state;
    }
}

export const removeTaskAC = (taskId: string, todolistId: string): RemoveTaskActionType => {
    return { type: 'REMOVE-TASK', taskId: taskId, todolistId: todolistId }
}
export const addTaskAC = (item: TaskType): AddTaskActionType => {
    return { type: 'ADD-TASK', item }
}
// export const changeTaskStatusAC = (taskId: string, status: TaskStatuses, todolistId: string): ChangeTaskStatusActionType => {
//     return { type: 'CHANGE-TASK-STATUS', status, todolistId, taskId }
// }
// export const changeTaskTitleAC = (taskId: string, title: string, todolistId: string): ChangeTaskTitleActionType => {
//     return { type: 'CHANGE-TASK-TITLE', title, todolistId, taskId }
// }
export const changeTaskFieldAC = (taskId: string, fieldName:string,fieldValue: any, todolistId: string) => ({ type: 'CHANGE-TASK-FIELD', fieldName, fieldValue, todolistId, taskId } as const)

export const setTasksAC = (todolistId: string, items: TaskType[]): SetTasksActionType => {
    return { type: 'SET_TASKS', items, todolistId }
}

export const setTasksTC = (todolistId: string) => (dispatch: Dispatch) => {
    todolistsAPI.getTasks(todolistId).then(res => dispatch(setTasksAC(todolistId, res.data.items)))
}

export const deleteTaskTC = (todolistId: string, taskId: string) => (dispatch: Dispatch) => {
    todolistsAPI.deleteTask(todolistId, taskId).then(res => dispatch(removeTaskAC(taskId, todolistId)));

}

export const addTaskTC = (todolistId: string, title: string) => (dispatch: Dispatch) => {
    todolistsAPI.createTask(todolistId, title).then(res => dispatch(addTaskAC(res.data.data.item)));

}

export const updateTaskFieldsTC = (todolistId: string, taskId: string, fieldName:string,fieldValue: any) => (dispatch: Dispatch, getState: () => AppRootStateType) => {
    const all = getState().tasks[todolistId]
    const task = all.find(t => {
        return t.id === taskId
    })

    if (task) {
        todolistsAPI.updateTask(todolistId, taskId, {
            ...{
                title: task.title,
                startDate: task.startDate,
                priority: task.priority,
                description: task.description,
                deadline: task.deadline,
                status: task.status
            }, [fieldName]: fieldValue
        }).then(() => dispatch(changeTaskFieldAC(taskId, fieldName, fieldValue,todolistId)));
    }
}
