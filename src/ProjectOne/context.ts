import { createContext } from 'react';

export interface User {
  step: string;
  userInfo: { [key: string]: string };
  members: [{ [key: string]: string | boolean | number }];
}
export interface UserContext {
  value: User;
  setValue: undefined | React.Dispatch<React.SetStateAction<UserContext>>;
}
export const defaultContextValue: UserContext = {
  value: {
    step: 'one',
    userInfo: {},
    members: [{}],
  },
  setValue: undefined,
};

export const UserStateContext = createContext<UserContext>(defaultContextValue);
