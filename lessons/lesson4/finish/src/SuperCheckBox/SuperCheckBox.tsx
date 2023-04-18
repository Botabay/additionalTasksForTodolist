import React from 'react';

type PropsType={
    callBack:(e:boolean)=>void
    isDone:boolean
}

export const SuperCheckBox = (props:PropsType) => {
    const onChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
        props.callBack(e.currentTarget.checked)
    }
    return (
        <input type="checkbox" onChange={onChangeHandler} checked={props.isDone}/>
    );
};