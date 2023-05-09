import React from 'react';
import {PagesType} from "../../dataState/dataState";
import {useParams} from "react-router-dom";
import {Content} from "./Content";
import { Error404 } from './Error404';

type PagePropsType = {
    pages: Array<PagesType>
}


export const Page = ({pages}: PagePropsType) => {
    const param = useParams()
    return (
        pages[Number(param.id)] ? <Content heading={pages[Number(param.id)].heading} pages={pages[Number(param.id)].about}/>: <Error404 />

        // <Content heading={props.pages[Number(param.id)].heading} pages={props.pages[Number(param.id)].about}/>
        // <div>
        //     <div>
        //         {props.pages[Number(param.id)].heading}
        //     </div>
        //     <div>
        //         {props.pages[Number(param.id)].about}
        //     </div>
        // </div>
    );
};

