import { RootState } from '../reducers';

const user = (state: RootState) => state.auth.user;
const isAuth = (state: RootState) => state.auth.isAuth;
const setOnSync = (state: RootState) => state.auth.setOnSync;

export const authSelectors = {
  user,
  isAuth,
  setOnSync,
};
