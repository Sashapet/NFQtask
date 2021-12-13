import { AnyAction, CombinedState, combineReducers } from 'redux';

import { appReducer, AppReducerState } from './app/AppReducer';
// import { constants } from './constants';

export interface RootState {
  app: AppReducerState;
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
  app: appReducer,
});

const rootReducer = (state: RootState | undefined, action: AnyAction) =>
  combinedReducer(state, action);

export { rootReducer };
