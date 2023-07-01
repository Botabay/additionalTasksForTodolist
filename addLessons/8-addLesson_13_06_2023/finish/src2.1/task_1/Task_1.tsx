import { ChangeEvent, FC, memo, useCallback, useState } from 'react';

const CONTAINER_STYLES = { display: 'flex', flexDirection: 'column', gap: 10 };

type PropsType = { value: string, onChange: (e: ChangeEvent<HTMLInputElement>) => void };

// Task 1
// If change value on input Title component not re-render
// If change value on input Task_1 component not re-render

const Task_2 = () => {
  console.log('render task_1');
  // const [value, setValue] = useState('');

  // const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
  //   setValue(e.currentTarget.value);
  // };

  return (
    <div style={{ ...CONTAINER_STYLES } as any}>
      <Input  />
      <Title title="I am a title" />
    </div>
  );
};

export const Task_1 = memo(Task_2)

const Title = memo((props: { title: string }) => {
  console.log('render title');
  return <h3>{props.title}</h3>;
})


const Input = () => {
  const [value, setValue] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValue(e.currentTarget.value);
  };
  return (
    <input type="text" placeholder="Placeholder" value={value} onChange={handleChange} />
  );
};
