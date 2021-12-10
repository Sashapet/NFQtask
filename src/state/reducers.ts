import { AnyAction, CombinedState, combineReducers } from 'redux';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-ignore
import { storage } from '../utils/storage';
import { appReducer, AppReducerState } from './app/AppReducer';
import { constants } from './constants';

export interface RootState {
  app: AppReducerState;
}

export interface PersistedAppState extends RootState {
  _persist: { version: number; rehydrated: boolean };
}

// Persist ui state without onSync
const uiConfig = {
  key: 'ui',
  storage: storage,
  blacklist: ['onSync'],
};

const combinedReducer = combineReducers<CombinedState<RootState>>({
  app: appReducer,
});

const rootReducer = (state: RootState | undefined, action: AnyAction) => {
  if (action.type === constants.app.CLEAR_APP_STATE) {
    return combinedReducer(undefined, action);
  }
  return combinedReducer(state, action);
};

export { rootReducer };
