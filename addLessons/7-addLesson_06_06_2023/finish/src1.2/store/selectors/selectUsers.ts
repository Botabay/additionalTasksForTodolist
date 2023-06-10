import {UserType} from '../../types';
import { RootStoreType} from "../index";


export const SelectUsers = (state: RootStoreType): UserType[] => state.usersData.users;
