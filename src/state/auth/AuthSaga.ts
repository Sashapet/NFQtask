import { call, fork, put, take, takeLeading } from 'redux-saga/effects';
import { actions, constants } from '@state/.';
import { Api } from '@api/api';
import { UserProps } from '@typings/userTypes';

function* handleLogin(data: {
  type: string;
  payload: { username: string; password: string };
}) {
  const { payload } = data;
  try {
    yield put(actions.auth.error(''));
    yield put(actions.auth.setOnSync(true));
    const token: string = yield call(Api.login, payload);
    if (token) {
      yield put(actions.auth.setAuth(true));
    }
  } catch (e) {
    yield put(actions.auth.error('User not found'));
  } finally {
    yield put(actions.auth.setOnSync(false));
  }
}

export function* checkAuth() {
  const token: string = yield call(Api.getToken);
  if (token) {
    yield put(actions.auth.setAuth(true));
  } else {
    yield put(actions.auth.setAuth(false));
  }
}

export function* listenToAuthState() {
  try {
    while (true) {
      const { payload } = yield take(constants.auth.SET_AUTH);
      const isAuth = payload;
      if (isAuth) {
        const token: string = yield call(Api.getToken);
        const user: UserProps = yield call(Api.fetchUser, token);
        yield put(actions.auth.setUser(user));
      }
    }
  } catch (e) {
    console.tron.log(e.message);
  }
}

function* handleLogOut() {
  try {
    yield put(actions.auth.error(''));
    yield put(actions.auth.setOnSync(true));
    yield put(actions.auth.setUser(null));
    yield call(Api.logOut);
    yield put(actions.auth.setAuth(false));
  } catch (e) {
    yield put(actions.auth.error(e.message));
  } finally {
    yield put(actions.auth.setOnSync(false));
  }
}

export default function* authSaga() {
  yield fork(checkAuth);
  yield fork(listenToAuthState);
  yield takeLeading(constants.auth.LOGIN, handleLogin);
  yield takeLeading(constants.auth.LOG_OUT, handleLogOut);
}
