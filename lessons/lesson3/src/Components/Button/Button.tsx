type PropsType={
    callback:()=>void
    value: string
}
export const Button=(props:PropsType)=>{
    const onClickHandler=()=>{
        props.callback()
    }
    return(
        <button onClick={onClickHandler}>{props.value}</button>
    )
}