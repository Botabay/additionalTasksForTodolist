import { FilterValuesType, TasksStateType, TodolistType } from '../App';
import { v1 } from 'uuid';
import { AddTodolistAC, RemoveTodolistAC, RemoveTodolistActionType,AddTodolistActionType} from './todolists-reducer';

export type FActionType = ReturnType<typeof removeTaskAC>
export type SActionType = ReturnType<typeof addTaskAC>
export type changeTaskStatusACType = ReturnType<typeof changeTaskStatusAC>
export type changeTaskTitleACType = ReturnType<typeof changeTaskTitleAC>

type ActionsType = FActionType | SActionType | changeTaskStatusACType | changeTaskTitleACType | RemoveTodolistActionType | AddTodolistActionType

export const tasksReducer = (state: TasksStateType, action: ActionsType) => {
    switch (action.type) {
        case 'removeTask':
            return {
                ...state,
                [action.payloads.todolistId]: state[action.payloads.todolistId].filter(el => el.id != action.payloads.taksId)
            }
        case 'addTask':
            return {
                ...state,
                [action.payloads.todolistId]: [{
                    id: '4', title: action.payloads.title,
                    isDone: false
                },
                ...state[action.payloads.todolistId]]
            }
        case 'changeTaskStatus':
            return {
                ...state,
                [action.payloads.todolistId]: state[action.payloads.todolistId].
                    map(el => el.id === action.payloads.id ? {
                        ...el, isDone: action.payloads.isDone
                    } : el)
            }
        case 'changeTaskTitle':
            return {
                ...state,
                [action.payloads.todolistId]: state[action.payloads.todolistId].
                    map(el => el.id === action.payloads.id ? {
                        ...el, title: action.payloads.title
                    } : el)
            }
        case 'ADD-TODOLIST':
            return {
                ...state, [action.id]: []
            }
        case 'REMOVE-TODOLIST': {
            let copya = { ...state };
            delete copya[action.id]
            return {
                ...copya
            }
        }
        default:
            throw new Error("I don't understand this type")
    }
}

export const removeTaskAC = (taksId: string, todolistId: string) => {
    return { type: 'removeTask', payloads: { taksId, todolistId } } as const
}
export const addTaskAC = (title: string, todolistId: string) => {
    return { type: 'addTask', payloads: { title, todolistId } } as const
}
export const changeTaskStatusAC = (id: string, isDone: boolean, todolistId: string) => {
    return {
        type: 'changeTaskStatus', payloads: {
            id, isDone, todolistId
        }
    } as const
}
export const changeTaskTitleAC = (id: string, title: string, todolistId: string) => {
    return {
        type: 'changeTaskTitle', payloads: {
            id, title, todolistId
        }
    } as const
}


