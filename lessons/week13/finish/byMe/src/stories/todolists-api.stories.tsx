import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { todolistsApi } from '../api/todolistsApi'

export default {
    title: 'todolistAPI'
}

export const GetTodolists = (): JSX.Element => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        todolistsApi.getTodolists('todo-lists')
            .then(res => setState(res.data))

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsApi.addTodolist('newTodo')
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTodolist = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsApi.deleteTodolist('790ae72c-0045-4bee-a3a8-0ba1eb86feeb')
            .then(res => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTodolistTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        todolistsApi.updateTodolistTitle('d8286011-ebde-4b4e-968f-3c42ccd551db', 'superT')
            .then(res => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

