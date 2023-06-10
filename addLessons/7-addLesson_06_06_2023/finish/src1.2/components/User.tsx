import React, {FC, memo} from 'react';
import {UserType} from '../types/UserType';

export const User: FC<UserType> = memo(({id, name}) => {
  return (
    <div>
      <div>Name: {name}</div>
      <div>Id: {id}</div>
    </div>
  );
});
