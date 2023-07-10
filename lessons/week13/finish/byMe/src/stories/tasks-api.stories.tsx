import { useEffect, useState } from 'react'
import { tasksApi } from '../api/tasksApi'

export default {
    title: 'tasksAPI'
}

export const GetTasks = (): JSX.Element => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        // здесь мы будем делать запрос и ответ закидывать в стейт.
        // который в виде строки будем отображать в div-ке
        tasksApi.getTasks('4887d160-f471-493b-8375-9dc0cdd1489b', 10, 1)
            .then(res => setState(res.data))

    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const CreateTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        tasksApi.addTask('4887d160-f471-493b-8375-9dc0cdd1489b', 'newTask')
            .then(res => setState(res.data))
    }, [])

    return <div>{JSON.stringify(state)}</div>
}
export const DeleteTask = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        tasksApi.deleteTask('0655df3b-057a-43e2-a82e-aa4f26915eea', 'b967c474-2578-4728-a297-218b59de0fd1')
            .then(res => {
                console.log(res);

                setState(res.data)
            })
    }, [])
    return <div>{JSON.stringify(state)}</div>
}
export const UpdateTaskTitle = () => {
    const [state, setState] = useState<any>(null)
    useEffect(() => {
        tasksApi.updateTaskTitle('0655df3b-057a-43e2-a82e-aa4f26915eea', 'b967c474-2578-4728-a297-218b59de0fd1', {
            title: 'title',
            description: 'required(string)',
            completed: true,
            status: 4,
            priority: 11,
            startDate: new Date(),
            deadline: new Date()
        })
            .then(res => setState(res.data))
    }, [])
    return <div>{JSON.stringify(state)}</div>
}

