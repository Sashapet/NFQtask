import { RootState } from '../reducers';

const user = (state: RootState) => state.auth.user;

export const authSelectors = {
  user,
};
