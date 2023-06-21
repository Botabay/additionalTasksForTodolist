import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { Task, TaskPropsType } from '../Task';
import { FC, useState } from 'react';
import AppWithRedux from '../AppWithRedux';
import { Provider } from 'react-redux';
import { store } from '../state/store';
import { ReduxStoreProviderDecorator } from '../state/ReduxStoreProviderDecorator';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta: Meta<typeof AppWithRedux> = {
    title: 'Todolists/AppWithRedux',
    component: AppWithRedux,
    tags: ['autodocs'],
    decorators: [
        ReduxStoreProviderDecorator
    ]

} satisfies Meta<typeof AppWithRedux>;

export default meta;
type Story = StoryObj<typeof AppWithRedux>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args



export const AppWithReduxStory: Story = {
    // render: () => <Provider store={store}> <AppWithRedux /></Provider>
}


