import {ChangeEvent} from 'react'
type PropsType={
    isDone:boolean
    callback:(k:boolean)=>void
}
export const Checkbox=(props:PropsType)=>{
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        props.callback(e.currentTarget.checked)
    }
    return <input type="checkbox" checked={props.isDone} onChange={onChangeHandler}/>
}