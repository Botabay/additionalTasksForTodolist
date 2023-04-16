
type PropsType={
    callback:()=>void
    name:string
}
export const SuperButton=(props:PropsType)=>{
    const f=()=>{props.callback()}
    return (
        <button onClick={() => {
            f()
        }}>{props.name}
        </button>
    )
}

/**
 * 
type PropsType={
    callback:(id:number)=>void
    id:number
    name:string
}
export const SuperButton=(props:PropsType)=>{
    const f=()=>{props.callback(props.id)}
    return (
        <button onClick={() => {
            f()
        }}>x
        </button>
    )
}
 */