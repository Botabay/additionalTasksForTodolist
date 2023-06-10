import { RootStateOrAny, RootStoreType } from "../../store";


export const SelectUsersCount = (state: RootStoreType): number => state.userCount.count;
