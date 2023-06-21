import type { Meta, StoryObj } from '@storybook/react';
import { action } from '@storybook/addon-actions'
import { AddItemForm, AddItemFormPropsType } from '../AddItemForm';
import { ChangeEvent, FC, KeyboardEvent, useState } from 'react';
import { IconButton, TextField } from '@mui/material';
import { AddBox } from '@mui/icons-material';

// More on how to set up stories at: https://storybook.js.org/docs/react/writing-stories/introduction
const meta = {
  title: 'Todolists/AddItemForm',
  component: AddItemForm,
  tags: ['autodocs'],
  argTypes: {
    addItem: {
      description: 'Button clicked inside form',
      // action: 'clicked'
    }
  },
}satisfies Meta<typeof AddItemForm>;

export default meta;
type Story = StoryObj<typeof meta>;

// More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args




export const AddItemFormStory: Story = {
  args: {
    addItem: action('Button clicked inside form')
  },
};

const T:FC<AddItemFormPropsType>=(props)=>{
  let [title, setTitle] = useState("")
  let [error, setError] = useState<string | null>('eror')

  const addItem = () => {
    if (title.trim() !== "") {
      props.addItem(title);
      setTitle("");
    } else {
      setError("Title is required");
    }
  }

  const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value)
  }

  const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (error !== null) {
      setError(null);
    }
    if (e.charCode === 13) {
      addItem();
    }
  }

  return <div>
    <TextField variant="outlined"
      error={!!error}
      value={title}
      onChange={onChangeHandler}
      onKeyPress={onKeyPressHandler}
      label="Title"
      helperText={error}
    />
    <IconButton color="primary" onClick={addItem}>
      <AddBox />
    </IconButton>
  </div>
}
export const AddItemFormErrorStory: Story = {
  args: {
    addItem: action('Button clicked inside form')
  },
  render: (args:AddItemFormPropsType)=> <T addItem={args.addItem}/>
}


