import { AnyAction, CombinedState, combineReducers } from 'redux';

import { authReducer, AuthReducerState } from './auth/AuthReducer';

export interface RootState {
  auth: AuthReducerState;
}

const combinedReducer = combineReducers<CombinedState<RootState>>({
  auth: authReducer,
});

const rootReducer = (state: RootState | undefined, action: AnyAction) =>
  combinedReducer(state, action);

export { rootReducer };
