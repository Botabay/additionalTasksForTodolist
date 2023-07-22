const initialState = {
    status: 'idle' as RequestStatusType,
    error: null as string | null,
    isInitialized: false,
}

export type InitialStateType = typeof initialState
export const appReducer = (state: InitialStateType = initialState, action: ActionsType): InitialStateType => {
    switch (action.type) {
        case 'APP/SET-STATUS':
            return { ...state, status: action.status }
        case 'APP/SET-ERROR':
            return { ...state, error: action.error }
        case 'APP/SET-INIT':
            return { ...state, isInitialized: action.isInitialized }
        default:
            return { ...state }
    }
}

export type RequestStatusType = 'idle' | 'loading' | 'succeeded' | 'failed'
// export type InitialStateType = {
//     // происходит ли сейчас взаимодействие с сервером
//     status: RequestStatusType
//     // если ошибка какая-то глобальная произойдёт - мы запишем текст ошибки сюда
//     error: string | null
// }

export const setAppErrorAC = (error: string | null) => ({ type: 'APP/SET-ERROR', error } as const)
export const setAppStatusAC = (status: RequestStatusType) => ({ type: 'APP/SET-STATUS', status } as const)
export const setAppInitAC = (isInitialized: boolean) => ({ type: 'APP/SET-INIT', isInitialized } as const)

export type SetAppErrorActionType = ReturnType<typeof setAppErrorAC>
export type SetAppStatusActionType = ReturnType<typeof setAppStatusAC>
export type SetAppInitActionType = ReturnType<typeof setAppInitAC>

type ActionsType =
    | SetAppErrorActionType
    | SetAppStatusActionType
    | SetAppInitActionType