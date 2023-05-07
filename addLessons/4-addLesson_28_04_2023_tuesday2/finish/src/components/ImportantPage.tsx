import { useParams } from "react-router-dom";
import { DataStateType, PagesType } from "../dataState/dataState";
import { Error404 } from './pages/Error404';

type PropsType = {
    pages: PagesType[]
}

export const ImportantPage = ({ pages }: PropsType) => {
    const params = useParams();

    return pages[Number(params.id)] ? <div>
        <h1>{pages[Number(params.id)].heading}</h1>
        <p>{pages[Number(params.id)].about}</p>
    </div> : <Error404 />

}