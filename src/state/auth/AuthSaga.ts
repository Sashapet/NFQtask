import { call, put, takeLeading } from 'redux-saga/effects';
import { actions, constants } from '@state/.';
import { Api } from '@api/api';
import { UserProps } from '@typings/userTypes';

function* handleLogin(data: {
  type: string;
  payload: { username: string; password: string };
}) {
  const { payload } = data;
  try {
    yield put(actions.auth.setOnSync(true));
    const loginData: { token: string; refreshToken: string } = yield call(
      Api.login,
      payload,
    );
    const userData: UserProps = yield call(Api.fetchUser, loginData.token);
    yield put(actions.auth.setUser(userData));
  } catch (e) {
    console.tron.log(e.message);
    yield put(actions.auth.error(e.message));
  } finally {
    yield put(actions.auth.setOnSync(false));
  }
}

export default function* authSaga() {
  yield takeLeading(constants.auth.LOGIN, handleLogin);
}
