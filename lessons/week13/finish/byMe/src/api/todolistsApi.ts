import axios from "axios"

const settings = {
    withCredentials: true,
    baseURL: 'https://social-network.samuraijs.com/api/1.0/',
    headers: {
        'API-KEY': '29f17b06-ce57-44c0-9728-ae1bcd1096f2'
    }
}

type TodolistType = {
    id: string,
    title: string
    addedDate: string
    order: number
}

type GetTodolistResponseType = Array<TodolistType>
type CreateTodolistResponseType = {
    resultCode: number
    messages: Array<string>,
    data: {
        item: TodolistType
    }
}
type UpdateTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    // fieldsErrors: Array<string>
    data: {}
}
type DeleteTodolistResponseType = {
    resultCode: number
    messages: Array<string>
    // fieldsErrors: Array<string>
    data: {}
}

type TodolistResponseType<T>={
    resultCode: number
    messages: Array<string>
    // fieldsErrors: Array<string>
    data: T
}
const axiosInstance = axios.create(settings)
export const todolistsApi = {
    getTodolists(value: string) {
        return axiosInstance.get<GetTodolistResponseType>(value)
    },
    addTodolist(title: string) {
        return axiosInstance.post<TodolistResponseType<{item: TodolistType}>>('todo-lists', { title })
    },
    deleteTodolist(id: string) {
        return axiosInstance.delete<TodolistResponseType<{}>>(
            'todo-lists/' + id)
    },
    updateTodolistTitle(id: string, title: string) {
        return axiosInstance.put<TodolistResponseType<{}>>('todo-lists/' + id, { title })
    }
}