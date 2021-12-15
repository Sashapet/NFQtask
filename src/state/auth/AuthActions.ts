import { UserProps } from '@typings/userTypes';

import { constants } from '../constants';

const setOnSync = (payload: boolean) => ({
  type: constants.auth.SET_ON_SYNC,
  payload,
});
const error = (payload: string) => ({
  type: constants.auth.ERROR,
  payload,
});
const login = (payload: { username: string; password: string }) => ({
  type: constants.auth.LOGIN,
  payload,
});
const setUser = (payload: UserProps) => ({
  type: constants.auth.SET_USER,
  payload,
});
export const authActions = { setOnSync, error, login, setUser };
