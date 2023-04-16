import React from "react";

type PropsType={
    callBack:()=>void
    name:string
}

export const SuperButton=(props:PropsType)=>{
    const onClickHandler=()=>{
        props.callBack()
    }
    return(
        <button onClick={onClickHandler}>{props.name}</button>
    )
}