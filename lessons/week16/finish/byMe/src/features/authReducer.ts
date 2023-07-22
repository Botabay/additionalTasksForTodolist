import { Dispatch } from 'redux'
import { SetAppErrorActionType, setAppInitAC, SetAppInitActionType, setAppStatusAC, SetAppStatusActionType } from '../app/app-reducer'
import { authAPI } from '../api/todolists-api'
import { LoginDataType } from './Login/Login'
import { handleServerAppError, handleServerNetworkError } from '../utils/error-utils'

const initialState = {
    isLoggedIn: false
}
type InitialStateType = typeof initialState

export const authReducer = (
    state: InitialStateType = initialState,
    action: ActionsType
): InitialStateType => {
    switch (action.type) {
        case 'login/SET-IS-LOGGED-IN':
            return { ...state, isLoggedIn: action.value }
        default:
            return state
    }
}
// actions
export const setIsLoggedInAC = (value: boolean) =>
    ({ type: 'login/SET-IS-LOGGED-IN', value } as const)

// thunks
export const loginTC = (data: LoginDataType) => async (dispatch: Dispatch<ActionsType>) => {
    // dispatch(setAppStatusAC('loading'));
    // authAPI.login({ email: data.email, password: data.password }).then(res => {
    //     if (res.data.resultCode === 0) {
    //         dispatch(setAppStatusAC('idle'))
    //     }
    //     dispatch(setAppStatusAC('idle'))
    // })
    try {
        dispatch(setAppStatusAC('loading'));
        const res = await authAPI.login(data);
        if (res.data.resultCode===0){
            dispatch(setAppStatusAC('idle'));
            dispatch(setIsLoggedInAC(true))
        }else{
            handleServerAppError(res.data, dispatch)
        }
    } catch (e){
        const error= e as {message:string};
        handleServerNetworkError(error, dispatch)
    }
}

export const logoutTC = () => (dispatch: Dispatch<ActionsType>) => {
    dispatch(setAppStatusAC('loading'))
    authAPI.logout()
        .then(res => {
            if (res.data.resultCode === 0) {
                dispatch(setIsLoggedInAC(false))
                dispatch(setAppStatusAC('succeeded'))
            } else {
                handleServerAppError(res.data, dispatch)
            }
        })
        .catch((error) => {
            handleServerNetworkError(error, dispatch)
        })
 }


export const meTC = () => async (dispatch: Dispatch<ActionsType>) => {
    try {
        dispatch(setAppStatusAC('loading'));
        const res = await authAPI.me();
        if (res.data.resultCode===0){
            dispatch(setAppStatusAC('idle'));
            dispatch(setIsLoggedInAC(true))
            // dispatch(setAppInitAC(true)) //???
        }else{
            handleServerAppError(res.data, dispatch)
        }
    } catch (e){
        const error= e as {message:string};
        handleServerNetworkError(error, dispatch)
    } finally{
        dispatch(setAppInitAC(true))
    }
}
// types
type ActionsType = ReturnType<typeof setIsLoggedInAC>
    | SetAppStatusActionType
    | SetAppErrorActionType
    |SetAppInitActionType
