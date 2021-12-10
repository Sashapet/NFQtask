import { constants } from '../constants';

const setAppUpdateFlag = (needToUpdate: boolean) => ({
  type: constants.app.SET_APP_UPDATE_FLAG,
  needToUpdate,
});

const clearAppState = () => ({
  type: constants.app.CLEAR_APP_STATE,
});

export const appActions = {
  clearAppState,
  setAppUpdateFlag,
};
