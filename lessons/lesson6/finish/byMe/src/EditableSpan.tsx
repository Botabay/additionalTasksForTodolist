import React, { useState, FocusEvent, ChangeEvent} from 'react';
import s from './EditableSpan.module.css'

type PropsType = {
    title: string
    className: string
    changeTitle: (newTitleValue:string) => void
}
export const EditableSpan = (props: PropsType) => {
    const [vis, setVis] = useState<boolean>(true);
    const [title,setTitle]=useState(props.title);
    const [error,setError]=useState('')
    return (
        <div>
            <span
                onDoubleClick={() => { setVis(false) }}>
                {vis && <span className={props.className}>{props.title}</span>}
                {!vis && <input 
                    type="text" 
                    onBlur={(e:FocusEvent<HTMLInputElement, Element>) => { 
                        if(e.currentTarget.value.trim()!==''){
                            setVis(true); props.changeTitle(e.currentTarget.value);
                            setError('')
                        } else {
                            setError('must be not empty')
                        }
                        
                    }} 
                    autoFocus={true}
                    value={title}
                    onChange={(e:ChangeEvent<HTMLInputElement>)=>{setTitle(e.currentTarget.value)}}
                    className={ error?s.error:''}
                />}
            </span>
            {error && <span>{error}</span>}
        </div>
    )
}