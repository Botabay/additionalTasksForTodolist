import React, {ChangeEvent, useState} from "react";

type PropsType={
    setTitle:(title:string)=>void
    title:string
}

export const SuperInput=(props:PropsType)=>{
    // const[title, setTitle]=useState('')
    const onChangeHandler=(event:ChangeEvent<HTMLInputElement>)=>{
        props.setTitle(event.currentTarget.value)
    }
    return(
        <input value={props.title} onChange={onChangeHandler}/>

    )
}