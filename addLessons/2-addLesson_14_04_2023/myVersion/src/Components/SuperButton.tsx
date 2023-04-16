type PropsType={
    name:string
    callback:()=>void
}
export const SuperButton=(props:PropsType)=>{
    const buttonOnClickHandler=()=>{
        props.callback()
    }
    return (
        <button onClick={buttonOnClickHandler}>{props.name}</button>
    )
}