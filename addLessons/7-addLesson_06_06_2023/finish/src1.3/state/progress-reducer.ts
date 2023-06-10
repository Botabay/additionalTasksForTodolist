import { v1 } from "uuid";

export type ProgressiveActionType = {
    type: string
    payload: number
}
export type IsWaitingDoneActionType = {
    type: string
    payload: boolean
}

export type ProgressiveActionsType = ProgressiveActionType | IsWaitingDoneActionType;

export type ProgressiveStateType = {
    value: number
    isWaitingDone: boolean
}

const initialState: ProgressiveStateType = { value: 0, isWaitingDone: false }

export const progressReducer = (state = initialState, action: ProgressiveActionsType) => {
    switch (action.type) {
        case 'progress': {
            return {
                ...state,
                value: action.payload
            }
        }
        case 'isWaitingDone': {
            return {
                ...state,
                isWaitingDone: action.payload
            }
        }
        default:
            return state
    }
}

export const progressiveAC = (value: number): ProgressiveActionType => {
    return { type: 'progress', payload:value } as const
}
export const isWaitingDoneAC = (value: boolean): IsWaitingDoneActionType => {
    return { type: 'isWaitingDone', payload: value } as const
}


