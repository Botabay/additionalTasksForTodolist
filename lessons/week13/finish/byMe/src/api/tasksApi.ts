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

type TaskType = {
    id: string,
    title: string
    addedDate: string
    order: number
}
type GetTasksResponseType = {
    items: Array<TaskType>
    totalCount: number
    error: null | string
}

type TaskResponseType<T={}> = {
    resultCode: number
    messages: Array<string>
    // fieldsErrors: Array<string>
    data: T
}

const axiosInstance = axios.create(settings)
export const tasksApi = {
    getTasks(todolistId: string, pageSize: number, pageNumber: number) {
        return axiosInstance.get<GetTasksResponseType>(`todo-lists/${todolistId}/tasks?count=${pageSize}&page=${pageNumber}`)
    },
    addTask(todolistId: string, title: string) {
        return axiosInstance.post<TaskResponseType<{ item: TaskType }>>(`todo-lists/${todolistId}/tasks`, { title })
    },
    deleteTask(todolistId: string, id: string) {
        return axiosInstance.delete<TaskResponseType>(
            `todo-lists/${todolistId}/tasks/${id}`)
    },
    updateTaskTitle(todolistId: string, id: string, title: any) {
        return axiosInstance.put<TaskResponseType>(`todo-lists/${todolistId}/tasks/${id}`, title)
    }
}