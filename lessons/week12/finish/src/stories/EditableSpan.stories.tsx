import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { Task, TaskPropsType } from '../Task';
import { FC, useState } from 'react';
import { EditableSpan } from '../EditableSpan';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof EditableSpan> = {
    title: 'Todolists/EditableSpan',
    component: EditableSpan,
    tags: ['autodocs'],
    args: {
        value:'adsf'
    }


} satisfies Meta<typeof EditableSpan>;

export default meta;
type Story = StoryObj<typeof EditableSpan>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args



export const EditableSpanStory: Story = {
    // args: {
    //    value:'adsf'
    // },
}


