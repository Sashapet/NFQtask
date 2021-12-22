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

const setAuth = (payload: boolean) => ({
  type: constants.auth.SET_AUTH,
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
const logOut = () => ({
  type: constants.auth.LOG_OUT,
});
const cleanUser = () => ({
  type: constants.auth.CLEAN_USER,
});

export const authActions = {
  setOnSync,
  error,
  setAuth,
  login,
  setUser,
  logOut,
  cleanUser,
};
