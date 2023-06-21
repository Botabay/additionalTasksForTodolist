import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { Task, TaskPropsType } from '../Task';
import { FC, useState } from 'react';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof Task> = {
    title: 'Todolists/Task',
    component: Task,
    tags: ['autodocs'],
    args: {
        changeTaskStatus: action('changeTaskStatus'),
        changeTaskTitle: action('changeTaskStatus'),
        removeTask: action('changeTaskStatus'),
        task: { id: 'dd', title: 'title one', isDone: true },
        todolistId: 'id todilist'

    }


} satisfies Meta<typeof Task>;

export default meta;
type Story = StoryObj<typeof Task>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args


export const TaskIsDoneStory: Story = {
    args: {
        task: { id: 'dd', title: 'title one', isDone: true }
    },
};

export const TaskIsNotDoneStory: Story = {
    args: {
        task: { id: 'dd', title: 'title not', isDone: false },
    },
}

const TaskWithHook: FC<TaskPropsType> = (args) => {
    const [task, setTask] = useState(args.task);
    const changeTaskStatus = (id:string, v:boolean):void => setTask({ ...task, isDone: v })
    const changeTaskTitle = (taskId:string,v:string) => setTask({ ...task, title: v })
    return <Task
        task={task}
        changeTaskStatus={changeTaskStatus}
        changeTaskTitle={changeTaskTitle}
        removeTask={args.removeTask}
        todolistId={args.todolistId}
    />
}

export const TaskWithHookStory: Story = {
    render: (args => <TaskWithHook
        task={args.task}
        changeTaskStatus={args.changeTaskStatus}
        changeTaskTitle={args.changeTaskTitle}
        removeTask={args.removeTask}
        todolistId={args.todolistId}
    />)
}


