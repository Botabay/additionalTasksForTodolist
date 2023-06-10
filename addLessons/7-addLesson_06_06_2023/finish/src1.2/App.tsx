import React, {Fragment, useCallback, useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {SelectUsers, SelectUsersCount} from './store/selectors/';
import {createUser, plusUserCount} from './store/actions/index';
import {v1} from 'uuid';
import {CustomButton, } from './components/';
import { UsersCountValue} from './components/UsersCountValue';
import {UsersList} from './components/UsersList';
import {generateRandomName} from './utils';
import {SetTimeoutType} from './types';

const DELAY = 500;

export const App = () => {
  const dispatch = useDispatch();
console.log(SelectUsers);

  const users = useSelector(SelectUsers);
  const usersCount = useSelector(SelectUsersCount);
console.log(users);

  const [isAddNewUser, setIsAddNewUser] = useState<boolean>(false);

  useEffect(() => {
    let timeoutId: SetTimeoutType = setTimeout((): void => {
      setIsAddNewUser(false);
    }, DELAY);

    return () => clearTimeout(timeoutId);
  }, [users.length]);

  useEffect(() => {
    if (users.length > 0 && isAddNewUser) {
      dispatch(plusUserCount());
    }
  }, [dispatch, users.length, isAddNewUser]);

  const handleClick = useCallback((): void => {
    dispatch(createUser({id: v1(), name: generateRandomName()}));

    setIsAddNewUser(true);
  }, [dispatch]);

  return (
    <Fragment>
      <UsersCountValue usersCount={usersCount} />

       <CustomButton
        title="Click Me"
        isButtonDisabled={isAddNewUser}
        onClick={handleClick}
      /> 

      <UsersList users={users} /> 
    </Fragment>
  );
};
