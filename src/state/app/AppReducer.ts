import { createReducer } from '@reduxjs/toolkit';

import { constants } from '../constants';

export const INITIAL_STATE: AppReducerState = {
  needToUpdate: false,
};

export interface AppReducerState {
  needToUpdate: boolean;
}

export const appReducer = createReducer(INITIAL_STATE, {
  [constants.app.SET_APP_UPDATE_FLAG]: (state, action) => {
    state.needToUpdate = action.needToUpdate;
  },
});
