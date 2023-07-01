import { ChangeEvent, ReactNode, useMemo, useState } from 'react';
import { SlowComponent } from './slowComponent/SlowComponent';


//find the problem and fix it as part of composition optimization, memo, children
//exists 2 ways(useMemo, useEffect помогают, но ререндер остается. useRef(нужно следить, т.к. react не знает о действиях useRef)) more for a fix the task
// export const Task_3 = () => {
//   // const [value, setValue] = useState('');

//   // const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

//   return (
//     <div>

//       <Container>
//         <SlowComponent />
//       </Container>
//     </div>
//   );
// };


//composition optimization
// const Input=()=>{ 
//   const [value, setValue] = useState('');

//   const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
//   return <input type="text" value={value} onChange={onChange} />
// }

// by children
type PropsType = {
  children: ReactNode
}
export const Task_3 = ({ children }: PropsType) => {
  const [value, setValue] = useState('');
  const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

  return <>
    <div>Lags when change value</div>
    <input type="text" value={value} onChange={onChange} />
    {children}
  </>
}
