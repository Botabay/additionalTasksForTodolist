import React, { useState } from 'react';
type PropsType={
    inpRef:React.LegacyRef<HTMLInputElement>
}
export const SuperInput=(props:PropsType)=>{
    
    // const buttonOnChangeHandler=(e:React.ChangeEvent<HTMLInputElement>)=>{
    //     props.callback(e.currentTarget.value)
    // }
    
    return (
        <input type="text"  ref={props.inpRef}/>
    )
}

//my making
// export const SuperInput=(props:PropsType)=>{
    
//     const buttonOnClickHandler=(value:string)=>{
//         props.callback(value)
//     }
//     return (
//         <input type="text" value={props.value} onChange={(e)=>{buttonOnClickHandler(e.currentTarget.value)}}/>
//     )
// }



