import { call } from 'redux-saga/effects';

export function* rootSaga() {
  yield call(console.log, 'Hello from saga');
}
