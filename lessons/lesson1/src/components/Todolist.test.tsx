// import React from 'react';
import { render,screen } from '@testing-library/react';
import {Todolist} from './Todolist';

const data={
    title:'hu',
    body:'bu',
     tasks: [
        {taskId: 1, title: "HTML&CSS1", isDone: true},
        {taskId: 2, title: "JS1", isDone: true},
        {taskId: 3, title: "TS", isDone: false}
    ]
}

describe('List component', ()=>{
    it("List renders",()=>{
        render(<Todolist title={data.title} tasks={data.tasks}/>)

        expect(screen.getByText(/hu/)).toBeInTheDocument();
    })
})
// test('renders learn react link', () => {
//   const { getByText } = render(<App />);
//   const linkElement = getByText(/learn react/i);
//   expect(linkElement).toBeInTheDocument();
// });