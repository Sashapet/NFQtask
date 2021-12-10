import { call, put } from 'redux-saga/effects';
import DeviceInfo from 'react-native-device-info';

import { actions } from '../actions';

function* getMinAppVersion(
  minAppVersion: string,
  forceUpdateRequired: boolean,
) {
  try {
    const currentVersion: string = yield call(DeviceInfo.getVersion);

    if (forceUpdateRequired) {
      yield put(actions.app.clearAppState());
      yield put(actions.app.setAppUpdateFlag(true));
    } else {
      yield put(actions.app.setAppUpdateFlag(false));
    }
  } catch (e) {
    console.log(e);
  }
}

export { getMinAppVersion };
