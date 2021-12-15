import { createReducer } from '@reduxjs/toolkit';
import { UserProps } from '@typings/userTypes';

import { constants } from '../constants';

export const INITIAL_STATE: AuthReducerState = {
  user: null,
  setOnSync: false,
  apiError: null,
};

export interface AuthReducerState {
  user: UserProps;
  setOnSync: boolean;
  apiError: string;
}

export const authReducer = createReducer(INITIAL_STATE, {
  [constants.auth.SET_ON_SYNC]: (state, action) => {
    state.setOnSync = action.payload;
  },
  [constants.auth.ERROR]: (state, action) => {
    state.apiError = action.payload;
  },
  [constants.auth.SET_USER]: (state, action) => {
    state.user = action.payload;
  },
});
