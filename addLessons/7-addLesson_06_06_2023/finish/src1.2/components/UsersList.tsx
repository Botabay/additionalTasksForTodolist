import { UserType } from '../types/UserType';
import React, { FC, memo } from 'react';
import { User } from './User';

type PropsType = {
  users: UserType[];
};

export const UsersList: FC<PropsType> = memo(({ users }) => {
  console.log(users,'user');
  
  return (
    <>
      {users.map((el) => {
        console.log(users,el.id,el.name);        
        return <User key={el.id} id={el.id} name={ el.name} />
      }

      )}
    </>
  );
});
