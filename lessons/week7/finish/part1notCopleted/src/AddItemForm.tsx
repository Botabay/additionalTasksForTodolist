import React, { ChangeEvent, KeyboardEvent, useState } from 'react';
import Button from '@mui/material/Button';
import {styled} from 'styled-components'

import TextField from '@mui/material/TextField';

type AddItemFormPropsType = {
    addItem: (title: string) => void
}

export function AddItemForm(props: AddItemFormPropsType) {

    let [title, setTitle] = useState("")
    let [error, setError] = useState<string | null>(null)

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
        setError(null);
        if (e.charCode === 13) {
            addItem();
        }
    }
    const uiStyled = {
        maxWidth: '30px',
        maxHeight: '30px',
        minWidth: '30px',
        minHeight: '30px',
        background: 'black'
    }
    return <div>
        <TextField id="outlined-basic"  variant="outlined" 
        value={title}
        onChange={onChangeHandler}
        onKeyPress={onKeyPressHandler}
        size={'small'}
        error={!!error}
        label={error?'title is required:':'enter something'}
        />
        {/* <input value={title}
            onChange={onChangeHandler}
            onKeyPress={onKeyPressHandler}
            className={error ? "error" : ""}
        /> */}
        <StyledComp><Button variant="contained" onClick={addItem} size={'small'}>+</Button></StyledComp>
        {/* <Button variant="contained" style={uiStyled} onClick={addItem}>+</Button> */}
        {/* <button onClick={addItem}>+</button> */}

        {/* {error && <div className="error-message">{error}</div>} */}
    </div>
}

const StyledComp=styled.div`
    & > button {
        maxWidth: '30px',
        maxHeight: '30px',
        minWidth: '30px',
        minHeight: '30px',
        background: 'black'
    }

`