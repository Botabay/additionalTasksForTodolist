import React from 'react';
import { useNavigate } from 'react-router-dom';

type ContentTypeProps={
    heading:string,
    pages:string
}

export const Content = (props:ContentTypeProps) => {
    const{heading, pages}=props
    const navv=useNavigate()

    return (
        <div>
            <div>{heading}</div>
            <div>{pages}</div>
            <button onClick={()=>navv('/')}>to home</button>
            <button onClick={()=>navv(-1)}>go</button>
        </div>
    );
};

