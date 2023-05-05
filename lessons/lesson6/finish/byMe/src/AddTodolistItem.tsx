import React, { useState, ChangeEvent } from 'react';

type PropsType = {
    AddTodolist: (title: string) => void
}
export const AddTodolistItem = (props: PropsType) => {
    const [inpSt, setInpSt] = useState<string>('');
    const [error, setError] = useState<string>('');
    const errorStyle = { outline: '5px solid red' };
    const errorMessageStyle = { color: 'red' };
    const f = () => {
        let text = inpSt.trim();
        setInpSt('');
        text ? props.AddTodolist(text) : setError('wrong text');
    }
    return (
        <div>
            <input type="text" style={error ? errorStyle : undefined}
                value={inpSt}
                onChange={(e: ChangeEvent<HTMLInputElement>) => {
                    setError('')
                    setInpSt(e.currentTarget.value);
                }}
                onKeyDown={(e) => e.key === 'Enter' ? f():null}
            />
            <button onClick={() => { f() }}>add todolist</button>
            {error && <p style={errorMessageStyle}>{error}</p>}
        </div>
    )
}